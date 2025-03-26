
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { registrationSchema, industrySectors, type RegistrationFormData } from "@/utils/validation";
import { registerTenant } from "@/utils/api";

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      organizationDetails: {
        companyName: "",
        industrySectors: [],
      },
      contactPersonsDetails: [
        {
          fullName: "",
          emailAddress: "",
          mobilePhoneNumber: "",
        },
      ],
      password: "",
      passwordConfirm: "",
      agreeToTerms: false,
      recaptchaToken: "",
    },
  });

  // Update form value when sectors selection changes
  useEffect(() => {
    const industrySectorsValue = selectedSectors.map(id => ({ _id: id }));
    form.setValue("organizationDetails.industrySectors", industrySectorsValue);
  }, [selectedSectors, form]);

  // Update form value when recaptcha token changes
  useEffect(() => {
    form.setValue("recaptchaToken", recaptchaToken);
  }, [recaptchaToken, form]);

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      setIsSubmitting(true);
      await registerTenant(data);
      toast.success("Registration successful! Please check your email for verification.");
      navigate("/registration-success");
    } catch (error) {
      console.error("Registration error:", error);
      // Toast is already shown in the API function
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSectorToggle = (sectorId: string) => {
    setSelectedSectors(prev => 
      prev.includes(sectorId)
        ? prev.filter(id => id !== sectorId)
        : [...prev, sectorId]
    );
  };

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setRecaptchaToken(token);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="mb-8 text-center"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-light tracking-tight mb-2">Tenant Registration</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join our platform to streamline your business operations
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="form-card glassmorphism">
            <CardHeader>
              <CardTitle>Register your organization</CardTitle>
              <CardDescription>
                Create an account for your organization to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <motion.div 
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg font-medium">Organization Details</h3>
                    
                    <FormField
                      control={form.control}
                      name="organizationDetails.companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter company name" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <FormLabel>Industry Sectors</FormLabel>
                      <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                        {industrySectors.map((sector) => (
                          <div
                            key={sector._id}
                            className={`
                              rounded-md border p-3 text-sm cursor-pointer transition-all
                              ${selectedSectors.includes(sector._id) 
                                ? 'border-primary bg-primary/10 text-primary' 
                                : 'border-border hover:border-muted-foreground/50'}
                            `}
                            onClick={() => handleSectorToggle(sector._id)}
                          >
                            {sector.name}
                          </div>
                        ))}
                      </div>
                      {form.formState.errors.organizationDetails?.industrySectors && (
                        <p className="text-sm font-medium text-destructive mt-2">
                          {form.formState.errors.organizationDetails.industrySectors.message}
                        </p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div 
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg font-medium">Contact Person Details</h3>
                    
                    <FormField
                      control={form.control}
                      name="contactPersonsDetails.0.fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter full name" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactPersonsDetails.0.emailAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Enter email address" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="contactPersonsDetails.0.mobilePhoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="e.g. +1234567890" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormDescription>
                            Include country code (e.g. +1 for US)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <h3 className="text-lg font-medium">Account Setup</h3>
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="Create a strong password" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormDescription>
                            Must include uppercase, lowercase, number, and special character
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="passwordConfirm"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input 
                              type="password" 
                              placeholder="Confirm your password" 
                              {...field} 
                              className="h-11"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>

                  <motion.div 
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <div className="flex flex-col space-y-4">
                      <FormField
                        control={form.control}
                        name="agreeToTerms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I agree to the <Link to="/terms" className="text-primary underline">terms and conditions</Link>
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="recaptchaToken"
                        render={() => (
                          <FormItem>
                            <div className="flex justify-center my-4">
                              <ReCAPTCHA
                                sitekey="6LcUF90qAAAAAPQaVEvPSzSPIAD3cbBnkni_j89t"
                                onChange={handleRecaptchaChange}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Registering..." : "Register"}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/" className="text-primary underline">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;

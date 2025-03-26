
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { loginUser } from "@/utils/api";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await loginUser(values.email, values.password);
      toast.success("Login successful!");
      navigate("/dashboard"); // Redirect to dashboard or home after login
    } catch (error) {
      // Error is already handled in the loginUser function
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        className="w-full max-w-md p-8 space-y-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.h2
            className="text-3xl font-light tracking-tight text-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sign in to your account
          </motion.h2>
          <motion.p
            className="mt-2 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome back! Please enter your credentials.
          </motion.p>
        </div>

        <Form {...form}>
          <motion.form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-12">
              Sign In
            </Button>
          </motion.form>
        </Form>

        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
          <p className="text-xs mt-2 text-gray-500">
            <Link to="/" className="hover:underline">
              Back to home
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;

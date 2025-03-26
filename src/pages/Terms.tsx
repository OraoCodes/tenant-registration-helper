
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button 
            variant="ghost" 
            asChild
            className="mb-4 pl-0 hover:bg-transparent"
          >
            <Link to="/register">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Registration
            </Link>
          </Button>
          
          <h1 className="text-3xl font-light tracking-tight mb-2">Terms and Conditions</h1>
          <p className="text-muted-foreground">Please read these terms carefully before registering</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="prose prose-blue max-w-none"
        >
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of our tenant registration service and the provision of our platform and services. By registering, you agree to these terms.
          </p>
          
          <h2>2. Account Registration</h2>
          <p>
            When you register for an account, you must provide accurate and complete information. You are responsible for maintaining the security of your account credentials.
          </p>
          
          <h2>3. Use of Services</h2>
          <p>
            Our services are provided for legitimate business purposes only. You agree not to use the platform for any illegal or unauthorized purpose.
          </p>
          
          <h2>4. Data Protection and Privacy</h2>
          <p>
            We collect and process personal data in accordance with our Privacy Policy. By registering, you consent to our collection and processing of your data as described.
          </p>
          
          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the platform are owned by us and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          
          <h2>6. Payment Terms</h2>
          <p>
            If applicable, payment terms will be specified during the registration process. You agree to pay all fees associated with your account.
          </p>
          
          <h2>7. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your account for violations of these terms or for any other reason at our discretion.
          </p>
          
          <h2>8. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. Continued use of the platform after such modifications constitutes acceptance of the updated terms.
          </p>
          
          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the platform.
          </p>
          
          <h2>10. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the jurisdiction in which our company is registered.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;

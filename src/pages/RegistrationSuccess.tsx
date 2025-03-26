
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div 
        className="max-w-md w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.1
        }}
      >
        <div className="mb-6 flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.3
            }}
          >
            <CheckCircle className="h-20 w-20 text-primary" />
          </motion.div>
        </div>
        
        <motion.h1 
          className="text-3xl font-light tracking-tight mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Registration Successful
        </motion.h1>
        
        <motion.p 
          className="text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Thank you for registering! Please check your email to verify your account and complete the setup process.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button asChild className="w-full h-12 btn-primary">
            <Link to="/">
              Return to Login
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RegistrationSuccess;


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <motion.div 
        className="text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <motion.h1 
          className="text-4xl font-light tracking-tight mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to the Tenant Portal
        </motion.h1>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A beautiful, streamlined tenant management system with an intuitive interface
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button asChild size="lg" className="h-12 btn-primary">
            <Link to="/register">
              Register as a Tenant
            </Link>
          </Button>
          
          <Button asChild variant="outline" size="lg" className="h-12">
            <Link to="/login">
              Sign In
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;

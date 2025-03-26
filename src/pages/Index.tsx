
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, BarChart, Globe, Wallet, Shield } from "lucide-react";

const Index = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-yellow-500/10 z-0" />
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <img 
                  src="/lovable-uploads/b0ffd01d-5123-4a6f-8d33-890e0fef3125.png" 
                  alt="Gebeya Logo" 
                  className="h-16 md:h-20 inline-block md:mx-0 mx-auto"
                />
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Build Your Own Marketplace
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Create and manage your customized, Upwork-like marketplace with powerful tools for service providers and buyers.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button asChild size="lg" className="h-12 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 rounded-full px-8">
                  <Link to="/register">
                    Register as a Tenant
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-8 border-2">
                  <Link to="/login">
                    Sign In
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 mt-12 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-orange-500/20 to-yellow-500/20 rounded-2xl blur-xl transform -rotate-6" />
                <div className="glassmorphism rounded-2xl p-8 relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/80 p-6 rounded-xl shadow-sm">
                      <Users className="h-10 w-10 text-pink-500 mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Talent Access</h3>
                      <p className="text-gray-600 text-sm">Connect with skilled service providers globally</p>
                    </div>
                    <div className="bg-white/80 p-6 rounded-xl shadow-sm">
                      <BarChart className="h-10 w-10 text-orange-500 mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Analytics</h3>
                      <p className="text-gray-600 text-sm">Deep insights into marketplace performance</p>
                    </div>
                    <div className="bg-white/80 p-6 rounded-xl shadow-sm">
                      <Wallet className="h-10 w-10 text-yellow-500 mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Payments</h3>
                      <p className="text-gray-600 text-sm">Secure transaction handling and escrow</p>
                    </div>
                    <div className="bg-white/80 p-6 rounded-xl shadow-sm">
                      <Globe className="h-10 w-10 text-orange-500 mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                      <p className="text-gray-600 text-sm">Expand your business beyond borders</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive solution helps you build your marketplace with all the tools you need
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Branding</h3>
              <p className="text-gray-600">
                Create a marketplace that reflects your brand identity with customizable themes and layouts.
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Provider Management</h3>
              <p className="text-gray-600">
                Easily onboard, verify, and manage service providers with powerful administration tools.
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center mb-6">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Transactions</h3>
              <p className="text-gray-600">
                Handle payments with confidence using our secure transaction system and escrow services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-orange-500/90 to-yellow-500/90" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Marketplace?</h2>
            <p className="text-xl mb-10 opacity-90">
              Join thousands of business owners who've transformed their service offerings with our platform.
            </p>
            <Button asChild size="lg" className="h-14 bg-white text-orange-600 hover:bg-gray-100 rounded-full px-10 text-lg">
              <Link to="/register">
                Start Your Journey Today
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <img 
                src="/lovable-uploads/b0ffd01d-5123-4a6f-8d33-890e0fef3125.png" 
                alt="Gebeya Logo" 
                className="h-10"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms of Service</Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
              <Link to="#" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Gebeya. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

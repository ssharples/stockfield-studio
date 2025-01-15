import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/website%20banner.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/70 via-dark-800/60 to-dark-700/50 backdrop-blur-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-chrome-light via-white to-chrome-dark bg-clip-text text-transparent">
              Transform Your Sound with Professional Audio Engineering
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 glass-panel p-6 backdrop-blur-lg">
            Expert mixing and mastering services to elevate your music to industry standards.
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://skool.com/the-sound-society"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Get Unlimited Mix and Masters
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-chrome-main/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-chrome-dark/20 rounded-full blur-3xl animate-pulse" />
    </div>
  );
}

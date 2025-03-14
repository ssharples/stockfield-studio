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
              Professional Recording Studio & Post-Production
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 glass-panel p-6 backdrop-blur-lg">
            State-of-the-art recording facilities with full mixing and mastering services.
            Capture your sound in a world-class acoustic environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://skool.com/the-sound-society"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Book Studio Time Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[384px] max-h-[384px] bg-chrome-main/20 rounded-full blur-3xl animate-pulse translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[384px] max-h-[384px] bg-chrome-dark/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 translate-y-1/2" />
    </div>
  );
}

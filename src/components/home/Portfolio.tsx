import React from 'react';
import { motion } from 'framer-motion';
import AudioComparison from './AudioComparison';

export default function Portfolio() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-chrome-light to-chrome-dark bg-clip-text text-transparent">
              Hear the Difference
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the transformation of raw tracks into professional, radio-ready releases. 
            Listen to the before and after examples below to hear the impact of professional mixing and mastering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <AudioComparison
            beforeUrl="https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/audio/no-hablo-before.wav"
            afterUrl="https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/audio/no-hablo-after.wav"
          />
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Music, Folder } from 'lucide-react';
import StatsCard from './StatsCard';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-chrome-light to-chrome-dark bg-clip-text text-transparent">
            Meet the Engineers
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Scott Sharples */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-chrome-light/20 to-chrome-dark/20 blur-xl rounded-full" />
              <img
                src="https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/skool%20profile%20pic.png"
                alt="Scott Sharples"
                width={800}
                height={800}
                loading="lazy"
                className="relative rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Scott Sharples</h3>
            <p className="text-gray-300">
              Lead engineer with 10+ years experience specializing in hip-hop and electronic music
            </p>
          </motion.div>

          {/* Rocco Harris */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-chrome-light/20 to-chrome-dark/20 blur-xl rounded-full" />
              <img
                srcSet="
                  https://via.placeholder.com/400.webp 400w,
                  https://via.placeholder.com/800.webp 800w,
                  https://via.placeholder.com/1200.webp 1200w
                "
                src="https://via.placeholder.com/800.webp"
                alt="Rocco Harris"
                width={800}
                height={800}
                loading="lazy"
                className="relative rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Rocco Harris</h3>
            <p className="text-gray-300">
              Mixing specialist with a focus on vocal processing and spatial effects
            </p>
          </motion.div>

          {/* Bigheck */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-4">
              <div className="absolute -inset-2 bg-gradient-to-r from-chrome-light/20 to-chrome-dark/20 blur-xl rounded-full" />
              <img
                srcSet="
                  https://via.placeholder.com/400.webp 400w,
                  https://via.placeholder.com/800.webp 800w,
                  https://via.placeholder.com/1200.webp 1200w
                "
                src="https://via.placeholder.com/800.webp"
                alt="Bigheck"
                width={800}
                height={800}
                loading="lazy"
                className="relative rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Bigheck</h3>
            <p className="text-gray-300">
              Mastering engineer with expertise in loudness optimization and dynamic range control
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <StatsCard
            icon={<Clock className="w-10 h-10" />}
            title="Years of Experience"
            value="10+"
            delay={0.2}
          />
          <StatsCard
            icon={<Music className="w-10 h-10" />}
            title="Million Streams"
            value="5+"
            delay={0.4}
          />
          <StatsCard
            icon={<Folder className="w-10 h-10" />}
            title="Projects Completed"
            value="500+"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}

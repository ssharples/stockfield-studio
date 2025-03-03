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
            Lead Engineer
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

        </div>

        <div className="text-center mb-12">
          <a
            href="https://api.whatsapp.com/send?phone=447396739414&text=I%27d%20like%20to%20book%20a%20studio%20session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full transition-colors duration-200"
          >
            Book Studio Session via WhatsApp
          </a>
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

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Dry Hire Available</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Experienced engineers can hire our state-of-the-art studio space to work with your own clients. 
            Includes full access to our premium equipment and monitoring system.
          </p>
          <a
            href="https://wa.link/1cee98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full transition-colors duration-200"
          >
            Inquire About Space Hire
          </a>
        </div>
      </div>
    </section>
  );
}

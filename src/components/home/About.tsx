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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-chrome-light/10 to-chrome-dark/10 rounded-3xl p-8 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-48 h-48 flex-shrink-0">
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
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Scott Sharples</h3>
              <p className="text-gray-300 mb-4">
                27 year old audio engineer with 9 years experience working across rap, R&B, afrobeats and pop.
                Graduate of Manchester School of Music's prestigious Audio Engineering program.
              </p>
              
              <div className="space-y-2 text-gray-300 text-sm">
                <p>🎛️ Versatile producer fluent in Ableton, Pro Tools, Logic Pro & FL Studio</p>
                <p>🎓 Experienced educator teaching production techniques and self-sufficiency</p>
                <p>🎧 Patient mentor focused on artist comfort and peak performance</p>
                <p>🔥 Dedicated to delivering radio-ready mixes that elevate artist vision</p>
              </div>
            </div>
          </div>
        </motion.div>

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
            value="9+"
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

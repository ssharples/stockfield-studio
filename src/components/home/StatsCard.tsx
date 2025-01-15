import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, title, value, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="glass-panel p-6 flex flex-col items-center text-center"
    >
      <div className="text-chrome-light mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-2">{value}</h3>
      <p className="text-gray-400">{title}</p>
    </motion.div>
  );
};

export default StatsCard;
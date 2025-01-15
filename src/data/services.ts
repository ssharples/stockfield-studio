import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'mixing',
    title: 'Professional Mixing',
    description: 'Transform your tracks with industry-standard mixing techniques that bring clarity, depth, and professional polish to your music.',
    price: 'Starting at $300/song',
    features: [
      'Full mix engineering',
      'Detailed processing',
      'Two rounds of revisions',
      'Stem preparation',
      'Mix consultation'
    ]
  },
  {
    id: 'mastering',
    title: 'Mastering Services',
    description: 'Give your music the final touch it deserves with professional mastering that ensures your tracks sound great everywhere.',
    price: 'Starting at $150/song',
    features: [
      'Professional mastering',
      'Loudness optimization',
      'Stereo enhancement',
      'Format preparation',
      'Quality assurance'
    ]
  }
];
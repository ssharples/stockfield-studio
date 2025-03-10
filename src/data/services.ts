import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'recording',
    title: 'Studio Recording',
    description: 'Capture pristine audio in our state-of-the-art recording studio with industry-leading equipment and acoustics.',
    price: '$85/hour',
    features: [
      'Pro Tools HDX recording',
      'Isolated live rooms',
      'Vintage outboard gear',
      'Expert engineering',
      'File delivery in any format'
    ]
  },
  {
    id: 'mixing-mastering',
    title: 'Mixing & Mastering',
    description: 'Complete post-production package combining both mixing and mastering for radio-ready results.',
    price: 'Package from $400/song',
    features: [
      'Full mix engineering',
      'Analog mastering chain',
      'Reference track analysis',
      'Unlimited revisions',
      'Delivery for all platforms'
    ]
  }
];

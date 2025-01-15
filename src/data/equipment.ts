export interface EquipmentItem {
  name: string;
  description: string;
  imageUrl: string;
  srcSet?: string;
  width: number;
  height: number;
}

export const equipmentList: EquipmentItem[] = [
  {
    name: 'SSL Big Six Mixing Console',
    description: 'Analog mixing console with built-in EQ and compression',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ssl%20big%206.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ssl%20big%206.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ssl%20big%206.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ssl%20big%206.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'Neumann U87 Microphone',
    description: 'Legendary studio condenser microphone',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/neuman.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/neuman.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/neuman.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/neuman.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'PMC 6-2 Mid Field Monitors',
    description: 'Professional studio monitors with exceptional clarity',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/pmc%206-2.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/pmc%206-2.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/pmc%206-2.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/pmc%206-2.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'Apollo x16 Audio Interface',
    description: '16-channel Thunderbolt audio interface with UAD processing',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/apollo%20x16.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/apollo%20x16.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/apollo%20x16.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/apollo%20x16.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'UAD Apollo Twin Audio Interface',
    description: 'High-quality 2-channel interface with UAD processing',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/Apollo%20twin.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/Apollo%20twin.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/Apollo%20twin.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/Apollo%20twin.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'Thermonic Culture Vulture',
    description: 'Harmonic saturation processor for analog warmth',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/culture%20vulture%202.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/culture%20vulture%202.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/culture%20vulture%202.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/culture%20vulture%202.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'Professional Grade Acoustic Treatment',
    description: 'Acoustically treated studio environment for accurate monitoring',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/acoustics.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/acoustics.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/acoustics.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/acoustics.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'LG Curved Monitor',
    description: 'Ultrawide curved display for DAW workflow',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/lg%20curved%20monitor.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/lg%20curved%20monitor.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/lg%20curved%20monitor.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/lg%20curved%20monitor.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'Komplete S61 MK2 MIDI Keyboard',
    description: '61-key MIDI controller with Komplete integration',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/midi%20keyboard.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/midi%20keyboard.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/midi%20keyboard.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/midi%20keyboard.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  {
    name: 'Ableton Push 2',
    description: 'Advanced controller for Ableton Live',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ableton%20push.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ableton%20push.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ableton%20push.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ableton%20push.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  },
  

  {
    name: 'Korg Minilogue Bass Synth',
    description: 'Analog bass synthesizer with rich tone',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/korg%20bass%20synth.webp?width=800',
    srcSet: `
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/korg%20bass%20synth.webp?width=400 400w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/korg%20bass%20synth.webp?width=800 800w,
      https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/korg%20bass%20synth.webp?width=1200 1200w
    `,
    width: 800,
    height: 600
  }
];

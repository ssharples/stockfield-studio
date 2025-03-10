export interface EquipmentItem {
  name: string;
  description: string;
  imageUrl: string;
}

export const equipmentList: EquipmentItem[] = [
  {
    name: 'Neumann U47 FET',
    description: 'Legendary FET condenser microphone for vocals and instruments',
    category: 'Microphones'
  },
  {
    name: 'API 1608 Console',
    description: '32-channel analog console with vintage API sound',
    category: 'Console'
  },
  {
    name: 'B&W 802 D4',
    description: 'High-resolution studio reference monitors',
    category: 'Monitoring'
  },
  {
    name: 'Telefunken ELA M 251',
    description: 'Tube condenser microphone for pristine vocal capture',
    category: 'Microphones'
  },
  {
    name: 'Neve 1073DPX',
    description: 'Dual mic preamp with classic Neve sound',
    category: 'Preamps'
  },
  {
    name: 'UAD Apollo Twin Audio Interface',
    description: 'High-quality 2-channel interface with UAD processing',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/Apollo%20twin.png?t=2025-01-15T15%3A21%3A00.156Z'
  },
  {
    name: 'Thermonic Culture Vulture',
    description: 'Harmonic saturation processor for analog warmth',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/culture%20vulture%202.png?t=2025-01-15T15%3A34%3A45.226Z'
  },
  {
    name: 'Professional Grade Acoustic Treatment',
    description: 'Acoustically treated studio environment for accurate monitoring',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/acoustics.png?t=2025-01-15T15%3A27%3A17.702Z'
  },
  {
    name: 'LG Curved Monitor',
    description: 'Ultrawide curved display for DAW workflow',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/lg%20curved%20monitor.png?t=2025-01-15T15%3A30%3A32.612Z'
  },
  {
    name: 'Komplete S61 MK2 MIDI Keyboard',
    description: '61-key MIDI controller with Komplete integration',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/midi%20keyboard.png'
  },
  {
    name: 'Ableton Push 2',
    description: 'Advanced controller for Ableton Live',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/ableton%20push.png?t=2025-01-15T15%3A29%3A14.931Z'
  },
  

  {
    name: 'Korg Minilogue Bass Synth',
    description: 'Analog bass synthesizer with rich tone',
    imageUrl: 'https://mgbgzpvscrnfqnixubtz.supabase.co/storage/v1/object/public/website%20images/korg%20bass%20synth.png?t=2025-01-15T15%3A35%3A11.500Z'
  }
];

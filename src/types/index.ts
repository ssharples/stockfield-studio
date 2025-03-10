export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  artist: string;
  genre: string;
  beforeAudio?: string;
  afterAudio?: string;
  image: string;
}

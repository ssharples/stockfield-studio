import React from 'react';
import Hero from '../components/home/Hero';
import Portfolio from '../components/home/Portfolio';
import About from '../components/home/About';
import Equipment from '../components/home/Equipment';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <div className="container mx-auto px-6 py-16 text-center">
        <a
          href="https://open.spotify.com/playlist/5moM0hZfLzTtUc2MncmbOe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1DB954] hover:bg-[#1ED760] text-white font-bold py-4 px-8 rounded-full transition-colors duration-200"
        >
          Listen to Our Selected Mixes on Spotify
        </a>
      </div>
      <About />
      <Equipment />
      <Footer />
    </main>
  );
}

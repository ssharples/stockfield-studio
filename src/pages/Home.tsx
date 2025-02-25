import React from 'react';
import Hero from '../components/home/Hero';
import Portfolio from '../components/home/Portfolio';
import About from '../components/home/About';
import Equipment from '../components/home/Equipment';
import Footer from '../components/layout/Footer';
import SpotifyPlaylist from '../components/home/SpotifyPlaylist';

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <SpotifyPlaylist playlistId="5moM0hZfLzTtUc2MncmbOe" />
      <About />
      <Equipment />
      <Footer />
    </main>
  );
}

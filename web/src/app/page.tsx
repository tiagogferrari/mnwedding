"use client";

import Navbar from './components/Navbar';
import Image from 'next/image';
import GiftSection from './components/GiftSection';
import Countdown from './components/Countdown';
import homeBackground from '../../public/assets/images/home.jpg';
import place from '../../public/assets/images/place.jpg';
import aliancas from '../../public/assets/images/aliancas.jpg';
import casal from '../../public/assets/images/casal.jpg';
import casal2 from '../../public/assets/images/casal2.jpg';

export default function Home() {
  return (
    <main>
      {/* Seção 1: Início / Boas-vindas */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center snap-start"
        style={{
          backgroundImage: `url(${homeBackground.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
        }}
      >
        <Navbar />
        <div className="flex flex-col items-center text-center text-white [text-shadow:0_2px_4px_rgb(0_0_0_/_0.5)]">
          <h1 className="text-5xl md:text-9xl font-alex-brush font-bold mb-4">
            Nathalli & Mateus
          </h1>
          <p className="text-lg md:text-5xl font-alex-brush">
            19/10/2025
          </p>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen w-full flex items-center justify-center bg-stone-100 text-gray-800 p-8 md:p-12 overflow-hidden"
      >
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-10">
          <div className="relative flex items-center justify-center w-full h-[500px] md:h-[600px]">
            <div className="absolute top-0 left-8 md:left-16 transform -rotate-6 transition-transform duration-300 hover:-rotate-8 hover:scale-105 z-10">
              <div className="bg-white p-3 pb-12 shadow-lg rounded-sm">
                <Image
                  src={casal}
                  alt="Nathalli e Mateus"
                  className="w-56 h-56 md:w-64 md:h-64 object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="absolute top-4 right-8 md:right-16 transform rotate-4 transition-transform duration-300 hover:rotate-6 hover:scale-105 z-20">
              <div className="bg-white p-3 pb-12 shadow-xl rounded-sm">
                <Image
                  src={casal2}
                  alt="Nathalli e Mateus"
                  className="w-56 h-56 md:w-64 md:h-64 object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform rotate-1 transition-transform duration-300 hover:-rotate-1 hover:scale-105 z-30">
              <div className="bg-white p-3 pb-12 shadow-2xl rounded-sm">
                <Image
                  src={aliancas}
                  alt="Alianças"
                  className="w-56 h-56 md:w-64 md:h-64 object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* --- Coluna da Direita: Contagem e Citação --- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 z-20">
            <Countdown targetDate="2025-10-19T00:00:00" />

            <blockquote className="max-w-lg">
              <p className="text-xl md:text-2xl italic font-serif text-gray-700">
                “Deus mudou o teu caminho até juntares com o meu e guardou a tua vida separando-a para mim. Para onde fores, irei. Onde tu repousares, repousarei. Teu Deus será o meu Deus. Teu caminho o meu será.”
              </p>
              <footer className="mt-4 text-lg font-montserrat text-gray-600">
                – Rute 1:16-17
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <GiftSection />

      {/* Seção 4: O Grande Dia (Local e Horário) */}
      <section
        id="place"
        className="min-h-screen w-full flex items-center justify-center bg-stone-100 text-gray-800 snap-start p-4 md:p-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 max-w-6xl w-full">
          {/* Coluna da Esquerda: Imagem */}
          <div className="w-full lg:w-1/2">
            <Image
              src={place}
              alt="Local do Casamento"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              placeholder="blur"
            />
          </div>

          {/* Coluna da Direita: Mapa e Endereço */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-montserrat">Local do evento</h2>

            {/* Mapa do Google */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.4192825717237!2d-51.224983325026805!3d-23.409216556019604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5d8014140e41%3A0x723dc15a336a776f!2sRestaurante%20Rural%20V%C3%B3%20Tatau!5e0!3m2!1spt-BR!2sbr!4v1753753585091!5m2!1spt-BR!2sbr"
                className="w-full aspect-video rounded-lg shadow-md border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Endereço por Escrito */}
            <div className="font-sans">
              <h3 className="text-2xl font-semibold font-montserrat mb-2">Restaurante Rural Vó Tatau</h3>
              <p className="text-lg font-montserrat">Rodovia Mábio Gonçalves Palhano, KM 10</p>
              <p className="text-lg font-montserrat">Londrina - PR, 86055-991</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Navbar from './components/Navbar';
import Image from 'next/image';
import GiftSection from './components/GiftSection';
import Countdown from './components/Countdown';
import MobileCarousel from './components/MobileCarousel';
import homeBackground2 from '../../public/assets/images/home.png';
import place from '../../public/assets/images/place.jpg';
import aliancas from '../../public/assets/images/aliancas.jpg';
import casal from '../../public/assets/images/casal.jpg';

export default function Home() {
  return (
    <main>
      {/* Seção 1: Início / Boas-vindas */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center snap-start"
        style={{
          backgroundImage: `url(${homeBackground2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          opacity: 1,
        }}
      >
        <Navbar />
        <div className="flex flex-col items-center text-center text-white [text-shadow:0_2px_4px_rgb(0_0_0_/_0.5)]">
          <h1 className="flex flex-col sm:flex-row items-center gap-2 text-8xl sm:text-9xl md:text-[10rem] lg:text-[10rem] font-alex-brush font-bold mb-4 [text-shadow:0_2px_6px_rgb(0_0_0_/_0.6)] md:[text-shadow:0_2px_5px_rgb(0_0_0_/_0.55)]">
            <span>Nathalli</span>
            <span className="hidden sm:block">&</span>
            <span className="text-6xl sm:hidden">&</span>
            <span>Mateus</span>
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl font-alex-brush text-white [text-shadow:0_2px_6px_rgb(0_0_0_/_0.6)] md:[text-shadow:0_2px_4px_rgb(0_0_0_/_0.55)]">
            19/10/2025
          </p>
        </div>
      </section>

      <section
        id="about"
        className="min-h-screen w-full flex items-center justify-center bg-stone-100 text-gray-800 px-4 py-16 sm:p-8 md:p-12 overflow-hidden"
      >
        <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-10">
          {/* Mobile: Carousel */}
          <div className="block md:hidden w-full">
            <MobileCarousel
              items={[
                { src: casal, alt: 'Nathalli e Mateus' },
                { src: aliancas, alt: 'Alianças' },
              ]}
            />
          </div>

          {/* Desktop/Tablet: Fotos sobrepostas */}
          <div className="hidden md:flex relative items-center justify-center w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
            <div className="absolute top-0 left-4 sm:left-8 md:left-16 transform -rotate-3 transition-transform duration-300 hover:-rotate-6 hover:scale-105 z-10">
              <div className="bg-white p-3 pb-12 shadow-lg rounded-sm">
                <Image
                  src={casal}
                  alt="Nathalli e Mateus"
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="absolute bottom-30 right-2 sm:bottom-8 sm:right-8 md:right-16 transform rotate-3 transition-transform duration-300 hover:rotate-6 hover:scale-105 z-20">
              <div className="bg-white p-3 pb-12 shadow-2xl rounded-sm">
                <Image
                  src={aliancas}
                  alt="Alianças"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>

          {/* --- Coluna da Direita: Contagem e Citação --- */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-8 z-20">
            <Countdown targetDate="2025-10-19T00:00:00" />

            <blockquote className="max-w-lg w-full px-8 sm:px-12 md:px-0">
              <p className="text-xl md:text-2xl italic font-serif text-gray-700">
                &ldquo;Deus mudou o teu caminho até juntares com o meu e guardou a tua vida separando-a para mim. Para onde fores, irei. Onde tu repousares, repousarei. Teu Deus será o meu Deus. Teu caminho o meu será.&rdquo;
              </p>
              <footer className="mt-4 text-lg font-montserrat text-gray-600">
                – Rute 1:16-17
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="w-full flex items-center justify-center py-8 bg-stone-100">
        <div className="flex items-center gap-4 w-full max-w-md sm:max-w-2xl md:max-w-3xl px-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>
          <div className="text-stone-400 font-alex-brush text-3xl flex items-center gap-2">
            <span>N</span>
            <span className="text-2xl">E</span>
            <span>M</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>
        </div>
      </div>
      <GiftSection />

      <div className="w-full flex items-center justify-center py-8 bg-stone-100">
        <div className="flex items-center gap-4 w-full max-w-md sm:max-w-2xl md:max-w-3xl px-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>
          <div className="text-stone-400 font-alex-brush text-3xl flex items-center gap-2">
            <span>N</span>
            <span className="text-2xl">E</span>
            <span>M</span>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-stone-400 to-transparent"></div>
        </div>
      </div>
      {/* Seção 4: O Grande Dia (Local e Horário) */}
      <section
        id="place"
        className="min-h-screen w-full flex items-center justify-center bg-stone-100 text-gray-800 snap-start px-4 py-16 sm:px-8 md:px-12"
      >
        {/* Grid responsivo */}
        <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-x-12 gap-y-8 items-center">
          {/* Título (Mobile) */}
          <h2 className="lg:hidden text-4xl font-marcellus text-center">Local do evento</h2>

          {/* Imagem (lg: Coluna 1, Linha 1) com altura controlada */}
          <div className="w-full lg:h-[45vh] lg:col-start-1 lg:row-start-1">
            <Image
              src={place}
              alt="Local do Casamento"
              className="rounded-lg shadow-xl w-full h-full object-cover"
              placeholder="blur"
            />
          </div>

          {/* Texto (lg: Coluna 2, ocupa as 2 linhas) */}
          <div className="w-full h-full lg:col-start-2 lg:row-span-2 flex flex-col gap-6 text-center lg:text-left">
            <h2 className="hidden lg:block font-marcellus text-5xl lg:text-6xl xl:text-7xl">Local do evento</h2>

            {/* Container para alinhar o conteúdo (AJUSTADO) */}
            <div className="flex-grow flex flex-col justify-start lg:pt-8"> {/* Alterado de justify-center para justify-start */}
              <div className="font-sans my-4 lg:my-0">
                <h3 className="font-montserrat font-bold text-3xl lg:text-4xl xl:text-5xl mb-4">Restaurante Rural Vó Tatau</h3>
                <p className="font-montserrat text-lg lg:text-xl xl:text-2xl leading-relaxed">Rodovia Mábio Gonçalves Palhano, KM 10</p>
                <p className="font-montserrat text-lg lg:text-xl xl:text-2xl leading-relaxed">Londrina - PR, 86055-991</p>
                <p className="font-montserrat text-lg lg:text-3xl xl:text-4xl mt-8">Data e horário: 19/10/2025 às 9:30</p>
              </div>
            </div>
          </div>

          {/* Mapa (lg: Coluna 1, Linha 2) com altura controlada */}
          <div className="w-full lg:h-[30vh] lg:col-start-1 lg:row-start-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.4192825717237!2d-51.224983325026805!3d-23.409216556019604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5d8014140e41%3A0x723dc15a336a776f!2sRestaurante%20Rural%20V%C3%B3%20Tatau!5e0!3m2!1spt-BR!2sbr!4v1753753585091!5m2!1spt-BR!2sbr"
              className="w-full h-full rounded-lg shadow-md border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
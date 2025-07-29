// src/app/page.tsx
import Navbar from './components/Navbar';
import Image from 'next/image';
import GiftSection from './components/GiftSection';
import homeBackground from '../../public/assets/images/home.jpg';
import place from '../../public/assets/images/place.jpg';

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
          opacity: 0.6,
        }}
      >
        <Navbar />
        <div className="flex flex-col items-center text-center text-white [text-shadow:0_2px_4px_rgb(0_0_0_/_0.5)]">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Nathalli & Mateus
          </h1>
          <p className="text-lg md:text-xl font-semibold">
            19/10/2025
          </p>
        </div>
      </section>

      {/* Seção 2: Nossa História */}
      <section
        id="about"
        className="min-h-screen w-full flex items-center justify-center bg-stone-200 text-gray-800"
      >
        <h2 className="text-4xl font-serif">Seção Contagem regressiva</h2>
      </section>

      <GiftSection />

      {/* Seção 4: O Grande Dia (Local e Horário) */}
      <section
        id="place"
        className="min-h-screen w-full flex items-center justify-center bg-gray-200 text-gray-800 snap-start p-4 md:p-8"
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
            <h2 className="text-4xl md:text-5xl font-serif">Local do evento</h2>

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
              <h3 className="text-2xl font-semibold font-serif mb-2">Restaurante Rural Vó Tatau</h3>
              <p className="text-lg">Rodovia Mábio Gonçalves Palhano, KM 10</p>
              <p className="text-lg">Londrina - PR, 86055-991</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import Navbar from './components/Navbar';
import Image from 'next/image';
import GiftSection from './components/GiftSection';
import Countdown from './components/Countdown';
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
                    backgroundPosition: 'center 85%',
                    opacity: 1,
                }}
            >
                <Navbar />
                <div className="flex flex-col items-center text-center text-white [text-shadow:0_2px_4px_rgb(0_0_0_/_0.5)]">
                    <h1 className="flex flex-col sm:flex-row items-center gap-2 text-8xl sm:text-9xl md:text-[10rem] lg:text-[10rem] font-alex-brush font-bold mb-4">
                        <span>Nathalli</span>
                        <span className="hidden sm:block">&</span>
                        <span className="text-6xl sm:hidden">&</span>
                        <span>Mateus</span>
                    </h1>
                    <p className="text-lg md:text-5xl font-alex-brush">
                        19/10/2025
                    </p>
                </div>
            </section>

            <section
                id="about"
                className="min-h-screen w-full flex items-center justify-center bg-stone-100 text-gray-800 px-4 py-16 sm:p-8 md:p-12 xl:px-24 overflow-hidden"
            >
                <div className="max-w-8xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-10 xl:gap-4">
                    {/* Coluna da Esquerda: Fotos */}
                    <div className="relative flex items-center justify-center w-full h-[60vh] sm:h-[70vh] md:h-[80vh] xl:h-[85vh]">
                        <div className="absolute top-8 sm:top-12 md:top-16 xl:top-24 left-4 sm:left-8 md:left-16 xl:left-24 transform -rotate-3 transition-transform duration-300 hover:-rotate-6 hover:scale-105 z-10">
                            <div className="bg-white p-3 pb-12 shadow-lg rounded-sm">
                                <Image
                                    src={casal}
                                    alt="Nathalli e Mateus"
                                    className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-cover"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-16 right-2 sm:bottom-4 sm:right-8 md:right-16 xl:right-24 xl:bottom-16 transform rotate-3 transition-transform duration-300 hover:rotate-6 hover:scale-105 z-20">
                            <div className="bg-white p-3 pb-12 shadow-2xl rounded-sm">
                                <Image
                                    src={aliancas}
                                    alt="Alianças"
                                    className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-[22rem] xl:h-[22rem] object-cover"
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Coluna da Direita: Contagem e Citação */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-6 md:gap-8 xl:gap-12 z-20 xl:pr-16">
                        <Countdown targetDate="2025-10-19T00:00:00" />

                        <blockquote className="max-w-md sm:max-w-lg xl:max-w-2xl w-full px-4 sm:px-8 md:px-0">
                            <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl italic font-serif text-gray-700">
                                "Deus mudou o teu caminho até juntares com o meu e guardou a tua vida separando-a para mim. Para onde fores, irei. Onde tu repousares, repousarei. Teu Deus será o meu Deus. Teu caminho o meu será."
                            </p>
                            <footer className="mt-2 sm:mt-4 xl:mt-6 text-base sm:text-lg xl:text-xl font-montserrat text-gray-600">
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
                className="min-h-screen w-full flex items-center justify-center bg-stone-100 text-gray-800 snap-start px-4 py-16 sm:p-8 md:p-12"
            >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-8xl w-full">
                    {/* Coluna da Esquerda: Imagem */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src={place}
                            alt="Local do Casamento"
                            className="rounded-lg shadow-xl w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover"
                            placeholder="blur"
                        />
                    </div>

                    {/* Coluna da Direita: Informações */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-alex-brush">O Grande Dia</h2>
                        <div className="space-y-4 max-w-lg">
                            <p className="text-xl md:text-2xl font-light">
                                19 de Outubro de 2025
                                <br />
                                às 16:00
                            </p>
                            <p className="text-lg md:text-xl">
                                Espaço Torres
                                <br />
                                Rua Leonor Ribeiro, Recanto Santo Antônio
                                <br />
                                São José dos Campos - SP
                            </p>
                            <p className="text-gray-600 italic">
                                Traje: Esporte Fino
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

// src/app/components/GiftSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

const baseImagePath = '/assets/images';

const gifts = [
    { name: 'PARCELA DA LAVA LOUÇA', price: 'R$ 450,00', image: `${baseImagePath}/lava-louca.png` },
    { name: 'AIRFRYER', price: 'R$ 300,00', image: `${baseImagePath}/air-fryer.png` },
    { name: 'MIXER', price: 'R$ 200,00', image: `${baseImagePath}/mixer.png` },
    { name: 'BATEDEIRA', price: 'R$ 250,00', image: `${baseImagePath}/batedeira.png` },
    { name: 'SOFÁ', price: 'R$ 900,00', image: `${baseImagePath}/sofa.png` },
    { name: 'JOGO DE CAMA', price: 'R$ 100,00', image: `${baseImagePath}/jogo-de-cama.png` },
    { name: 'ARMARIO MULTIUSO', price: 'R$ 350,00', image: `${baseImagePath}/multiuso.png` },
    { name: 'KIT ORG. DE GELADEIRA', price: 'R$ 80,00', image: `${baseImagePath}/kit-organizador.png` },
    { name: 'VARAL DE CHÃO', price: 'R$ 150,00', image: `${baseImagePath}/varal.png` },
    { name: 'ALBUM DO CASAMENTO', price: 'R$ 160,00', image: `${baseImagePath}/album.png` },
];

const pixKey = '465.803.478-64';

export default function GiftSection() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(pixKey);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <section
            id="gifts"
            className="min-h-screen w-full flex items-center justify-center bg-stone-100 text-gray-800 snap-start py-12 px-4"
        >
            <div className="max-w-5xl w-full text-center">
                <h2 className="text-3xl md:text-4xl font-montserrat mb-6">Lista de Presentes</h2>

                <p className="max-w-4xl mx-auto mb-8 font-montserrat text-base italic">
                    Queridos familiares e amigos, a presença de vocês neste dia tão especial é o melhor presente que poderíamos receber. Se desejarem nos presentear, ficaremos muito gratos. Com amor, Mateus e Nathalli.
                </p>

                {/* Grid de Presentes com Imagens */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {gifts.map((gift) => (
                        <div key={gift.name} className="border border-gray-300 font-montserrat rounded-lg p-3 flex flex-col justify-between items-center bg-white shadow-md hover:shadow-lg transition-shadow">
                            <div className="relative w-20 h-20 mb-2">
                                <Image
                                    src={gift.image}
                                    alt={gift.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className='text-center'>
                                <p className="font-semibold text-xs md:text-sm leading-tight">{gift.name}</p>
                                <p className="text-gray-600 mt-1 font-semibold text-xs">{gift.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seção PIX */}
                <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-4 bg-white border border-gray-300 rounded-full px-5 py-2 shadow-sm">
                        <span className="text-gray-700 font-mono font-montserrat text-base">{pixKey}</span>
                        <button
                            onClick={handleCopy}
                            className={`px-5 py-1.5 rounded-full text-white text-sm font-montserrat transition-all duration-300 ${copied ? 'bg-green-500' : 'bg-gray-800 hover:bg-gray-700'} cursor-pointer`}
                        >
                            {copied ? 'Copiado!' : 'Copiar'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";

type CarouselItem = {
    src: StaticImageData;
    alt: string;
};

interface MobileCarouselProps {
    items: CarouselItem[];
}

export default function MobileCarousel({ items }: MobileCarouselProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onScroll = () => {
            const idx = Math.round(el.scrollLeft / el.clientWidth);
            setActive(Math.min(items.length - 1, Math.max(0, idx)));
        };
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [items.length]);

    return (
        <div className="w-full">
            <div
                ref={containerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-3 w-full px-2 no-scrollbar"
                style={{ scrollSnapType: "x mandatory" }}
                aria-roledescription="carousel"
            >
                {items.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="shrink-0 w-full snap-start flex justify-center"
                            aria-label={`Slide ${i + 1} de ${items.length}`}
                        >
                            <div
                                className={`w-[80vw] max-w-[340px] h-[48vh] bg-white p-2 pb-8 rounded-sm shadow-xl border border-stone-200`}
                            >
                                <div className="w-full h-full overflow-hidden">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                        placeholder="blur"
                                        priority={i === 0}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-3 flex items-center justify-center gap-2">
                {items.map((_, i) => (
                    <span
                        key={i}
                        className={
                            "h-1.5 w-1.5 rounded-full transition-colors " +
                            (i === active ? "bg-stone-700" : "bg-stone-300")
                        }
                        aria-label={`Ir para slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

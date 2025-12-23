"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const FollowOurJourney = () => {
  const images = [
    { src: "/images/follow1.png", alt: "Celebration moment" },
    { src: "/images/follow2.png", alt: "Event gathering" },
    { src: "/images/follow3.png", alt: "Indoor event" },
    { src: "/images/follow4.png", alt: "Event gathering" },
    { src: "/images/follow5.png", alt: "Indoor event" },
    { src: "/images/follow6.png", alt: "Celebration moment" },
    { src: "/images/follow7.jpg", alt: "Event gathering" },
    { src: "/images/follow8.jpg", alt: "Indoor event" },
    { src: "/images/follow9.jpg", alt: "Celebration moment" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handlePrevious, handleNext]);

  // const openLightbox = (index: number) => {
  //   setCurrentIndex(index);
  //   setIsOpen(true);
  // };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const sectionRef = useScrollAnimation({ animation: "fadeIn", duration: 0.8 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="bg-white py-8 md:py-12 px-[5%]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[1.8rem] sm:text-[2.3rem] leading-[110%] md:text-[3rem] font-bold mb-4">
            <span className="text-black">FOLLOW OUR </span>
            <span className="text-[#F2B22F]">JOURNEY</span>
          </h2>
          <p className="text-[0.9rem] md:text-[0.95rem] text-black max-w-3xl mx-auto">
            See our latest events and behind-the-scenes moments on social media
          </p>
        </div>

        {/* desktop view */}
        <section className="hidden sm:block">
          <div
            className="grid grid-cols-1 lg:grid-rows-2 gap-5 md:gap-5"
            style={{
              gridTemplateColumns:
                "calc(57.5% - 0.67rem) calc(42.5% - 0.67rem)",
            }}
          >
            <div
              className="relative w-full lg:row-span-2 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            //  onClick={() => openLightbox(0)}
            >
              <Image
                src="/images/follow1.png"
                alt="Celebration moment"
                width={913}
                height={800}
                className="object-cover w-full h-full"
                loading="eager"
                sizes="(max-width: 768px) 100vw, 57.5vw"
              />
            </div>

            <div
              className="relative w-full lg:row-span-1 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            // onClick={() => openLightbox(1)}
            >
              <Image
                src="/images/follow2.png"
                alt="Event gathering"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 42.5vw"
              />
            </div>

            <div
              className="relative w-full lg:row-span-1 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            // onClick={() => openLightbox(2)}
            >
              <Image
                src="/images/follow3.png"
                alt="Indoor event"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 42.5vw"
              />
            </div>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-rows-2 gap-5 mt-5 md:gap-5"
            style={{
              gridTemplateColumns:
                "calc(42.5% - 0.67rem) calc(57.5% - 0.67rem)",
            }}
          >
            <div
              className="relative w-full lg:row-span-1 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            // onClick={() => openLightbox(3)}
            >
              <Image
                src="/images/follow4.png"
                alt="Event gathering"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 42.5vw"
              />
            </div>

            <div
              className="relative w-full lg:row-span-1 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            // onClick={() => openLightbox(4)}
            >
              <Image
                src="/images/follow5.png"
                alt="Event gathering"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 42.5vw"
              />
            </div>

            <div
              className="relative w-full lg:row-span-2 lg:col-start-2 lg:row-start-1 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            //  onClick={() => openLightbox(5)}
            >
              <Image
                src="/images/follow6.png"
                alt="Celebration moment"
                width={913}
                height={800}
                className="object-cover w-full h-full"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 57.5vw"
              />
            </div>
          </div>
        </section>

        {/* mobile view */}
        <section className="grid mt-5 grid-cols-1 sm:hidden gap-5 md:gap-5">
          {images.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className="relative w-full h-75 md:h-125 lg:h-full rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            // onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={913}
                height={800}
                className="object-cover w-full h-full"
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
              />
            </div>
          ))}
        </section>

        <div className="grid mt-5 grid-cols-1 lg:grid-cols-3 gap-5 md:gap-5">
          <div
            className="relative w-full h-75 md:h-125 lg:h-full rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
          // onClick={() => openLightbox(6)}
          >
            <Image
              src="/images/follow7.jpg"
              alt="Event gathering"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 33.33vw"
            />
          </div>

          <div
            className="relative w-full h-75 md:h-125 lg:h-full rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
          // onClick={() => openLightbox(7)}
          >
            <Image
              src="/images/follow8.jpg"
              alt="Indoor event"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 33.33vw"
            />
          </div>

          <div
            className="relative w-full h-full sm:h-125 md:h-125 lg:h-full rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
          // onClick={() => openLightbox(8)}
          >
            <Image
              src="/images/follow9.jpg"
              alt="Celebration moment"
              width={1116}
              height={913}
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 33.33vw"
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
          </button>

          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
          </button>

          <div
            className="absolute inset-0 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-full max-h-full flex items-center justify-center">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={1920}
                height={1080}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                priority
                quality={95}
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm md:text-base bg-black/50 px-4 py-2 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default FollowOurJourney;

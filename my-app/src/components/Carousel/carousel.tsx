"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import styles from './carousel.module.css';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};

const DotButton: React.FC<DotButtonPropType> = ({ selected, onClick }) => (
  <button
    className={`${styles.embla__dot} ${selected ? styles['embla__dot--selected'] : ''}`}
    type="button"
    onClick={onClick}
  />
);

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((src, index) => (
            <div className={styles.embla__slide} key={index}>
              <img
                className={styles.embla__slide__img}
                src={src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <button className={`${styles.embla__button} ${styles.embla__button__prev}`} onClick={scrollPrev}>
        <svg className={styles.embla__button__svg} viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
      <button className={`${styles.embla__button} ${styles.embla__button__next}`} onClick={scrollNext}>
        <svg className={styles.embla__button__svg} viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
      </button>
      
      <div className={styles.embla__dots}>
        {slides.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => scrollTo(index)}
            selected={index === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel; 
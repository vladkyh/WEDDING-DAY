'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Image from "next/image";

// Импортируем изображения (замените на свои)
import image1 from '../dress/1.jpg';
import image2 from '../dress/2.jpg';
import image3 from '../dress/3.jpg';
import image4 from '../dress/4.jpg';
import image5 from '../dress/5.jpg';
import image6 from '../dress/6.jpg';
import image7 from '../dress/7.jpg';
import image8 from '../dress/8.jpg';
import image9 from '../dress/9.jpg';
import image10 from '../dress/10.jpg';
import image11 from '../dress/11.jpg';
import image12 from '../dress/12.jpg';
import image13 from '../dress/13.jpg';
import image14 from '../dress/14.jpg';
import image15 from '../dress/15.jpg';
import image16 from '../dress/16.jpg';
import image17 from '../dress/17.jpg';
import image18 from '../dress/18.jpg';
import image19 from '../dress/19.jpg';
import image20 from '../dress/20.jpg';
import image21 from '../dress/21.jpg';
import image22 from '../dress/22.jpg';
import image23 from '../dress/23.jpg';
import image24 from '../dress/24.jpg';
import image25 from '../dress/25.jpg';
import image26 from '../dress/26.jpg';
import image27 from '../dress/27.jpg';

export default function AutoplayCarousel() {
    const images = [
        image1, image2, image3, image4, image5, image6,
        image7, image8, image9, image10, image11, image12,
        image13, image14, image15, image16, image17, image18,
        image19, image20, image21, image22, image23, image24,
        image25, image26, image27
    ];

    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                {images.map((img, index) => (
                    <li className={styles.li} key={index}>
                        <Image
                            src={img}
                            alt={`Dress ${index}`}
                            width={0}
                            height={480}
                            className={styles.img}
                            style={{width: 'auto', height: '100%'}}
                        />
                    </li>
                ))}
                {/* Дублируем изображения для бесшовной анимации */}
                {images.map((img, index) => (
                    <li className={styles.li} key={`dup-${index}`}>
                        <Image
                            src={img}
                            alt={`Dress ${index}`}
                            width={0}
                            height={480}
                            className={styles.img}
                            style={{width: 'auto', height: '100%'}}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.css';
import { useState } from "react";
import sunnn1 from './))/qwe1.webp'
import sunnn2 from './))/qwe2.webp'
import sunnn3 from './))/qwe3.webp'
import sunnn4 from './))/qwe4.png'
import Link from "next/link";
import AutoCarousel from "@/app/comp/AutoCarousel";
import HorizontalCarousel from "@/app/comp/AutoCarousel";

const AnimatedElement = ({ children, delay = 0 }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: inView ? 1 : 0,
                y: inView ? 0 : 20
            }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};

const AnimatedElementooooooo = ({ children, delay = 0 }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0}}
            animate={{
                opacity: inView ? 1 : 0,

            }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
};
export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        sunnn4,
        sunnn2,
        sunnn3,
        sunnn1,
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div>
            <div className={styles.hero} id="hero">
                <AnimatedElement>
                    <h1 className={styles.h1}>
                        WEDDING <br/>
                        DAY
                    </h1>
                </AnimatedElement>
                <AnimatedElement delay={0.2}>
                    <h3 className={styles.h3}>
                        Anastasia & Nikita
                    </h3>
                </AnimatedElement>
                <AnimatedElementooooooo delay={0.4}>
                    <div className={styles.convert}></div>
                </AnimatedElementooooooo>
                <div className={styles.conv}></div>
            </div>

            <div className={styles.place}>
                <AnimatedElement>
                    <h3 className={styles.mesto}>Место проведения</h3>
                </AnimatedElement>
                <AnimatedElement delay={0.2}>
                    <h1 className={styles.sun}>THE SUN LAKE</h1>
                </AnimatedElement>

                <AnimatedElement delay={0.4}>
                    <div className={styles.carouselContainer}>
                        <button onClick={prevSlide} className={styles.arrowButton} style={{left: '10px'}}>
                            {'<'}
                        </button>

                        <div className={styles.carousel}>
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={styles.slide}
                                    style={{
                                        transform: `translateX(-${currentSlide * 100}%)`,
                                        backgroundImage: `url(${img.src})`,
                                    }}
                                />
                            ))}
                        </div>

                        <button onClick={nextSlide} className={styles.arrowButton} style={{right: '10px'}}>
                            {">"}
                        </button>
                    </div>
                </AnimatedElement>

                <AnimatedElement delay={0.6}>
                    <div className={styles.liaas}>
                        <p className={styles.asdas}>
                            Московская область, г.Солнечногорск, Тимоновское шоссе, 36
                            <Link
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.qqq}
                                href="https://yandex.co.il/navi/org/the_sun_lake/40246030321/?ll=36.977970%2C56.208907&mode=search&sctx=ZAAAAAgBEAAaKAoSCSO9qN2vfkJAEWmQgqeQG0xAEhIJ5J6u7lhscz8RbAcj9gmgWD8iBgABAgMEBSgKOABAs4IGSAFiIWFkZF9zbmlwcGV0PXRvcG9ueW1fZGlzY292ZXJ5LzEueGJCcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZURpc2NvdmVyeVRleHRSZXF1ZXN0cz0xYjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlUmVxdWVzdHM9MWI6cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZUVtcHR5UmVxdWVzdHM9MWI1cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZVZlcnRpY2FsPTFiMHJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vQXNrRGlzY292ZXJ5Rm9yVG9wb255bXM9MWI6cmVhcnI9c2NoZW1lX0xvY2FsL0dlby9MaXN0RGlzY292ZXJ5L0VuYWJsZUNvbW1vblBpY01lbnU9MWIacmFua2luZ19mb3JtdWxhPWwyX2RjODU0NjVqAnJ1nQHNzEw9oAEAqAEAvQE8poSbwgEG8d%2Fm9pUB6gEA8gEA%2BAEAggINVGhlIFN1biBldmVudIoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=36.982090%2C56.208907&sspn=0.024009%2C0.007613&text=The%20Sun%20event&z=16"
                            >
                                Как проехать?
                            </Link>
                        </p>
                    </div>
                </AnimatedElement>
            </div>

            <div className={styles.prog}>
                <div className={styles.bg_top}></div>
                <div className={styles.df}>
                    <AnimatedElement>
                        <div className={styles.date}></div>
                    </AnimatedElement>
                    <AnimatedElement delay={0.2}>
                        <div className={styles.programm}></div>
                    </AnimatedElement>
                </div>
                <div className={styles.bg_bottom}></div>
            </div>

            <div className={styles.dress}>
                <AnimatedElement>
                    <h1 className={styles.dress_h1}>
                        DRESS-CODE
                    </h1>
                </AnimatedElement>

                <AnimatedElement delay={0.2}>
                    <HorizontalCarousel/>
                </AnimatedElement>

                <AnimatedElement delay={0.4}>
                    <div className={styles.text_df}>
                        <div className={styles.wishes_block}>
                            <h1 className={styles.dress_h2}>Пожелания</h1>
                            <div className={styles.text_dff}>
                                <div className={styles.dress_please}>
                                    Просим вас поддержать атмосферу вечера и выбрать наряды в стиле black-tie. <br/>
                                    Образы для вдохновения вы найдёте в карусели выше!
                                </div>
                                <div className={styles.else}>
                                    Если вы планируете прийти с маленькими детьми, очень просим сообщить об этом, и выбрать
                                    для них белые образы! <br/> Ваш безупречный стиль сделает этот день еще прекраснее!
                                </div>
                            </div>
                        </div>

                        <div className={styles.contacts_block}>
                            <h1 className={styles.dress_h2}>Контакты</h1>
                            <div>
                                <div className={styles.sfvzx}>
                                    По всем вопросам, касающимся нашего торжества, вы можете обращаться к нашему свадебному
                                    организатору <strong>Диане</strong>  <br/>
                                </div>

                                <div className={styles.dresslink}>
                                    <Link
                                        className={styles.dresslink}
                                        href="https://t.me/dianauglanova"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Telegram
                                    </Link>
                                    <Link
                                        className={styles.dresslink}
                                        href="https://wa.me/+79263372941"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        WhatsApp
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedElement>
            </div>

            <div className={styles.footer}>
                <div className={styles.footer_df}></div>
                <div className={styles.footdf}>
                    <AnimatedElement>
                        <div className={styles.mbbs}>
                            <h1 className={styles.footer_h1}>THE SUN LAKE</h1>
                            <h4 className={styles.footer_h4}>
                                Московская область, <br/> г.Солнечногорск, <br/> Тимоновское шоссе, 36
                            </h4>
                            <h1 className={styles.footer_h2}>
                                20.07.2025
                            </h1>
                            <h3 className={styles.footer_h3}>
                                Сбор гостей
                            </h3>
                            <h1 className={styles.footer_time}>
                                15:00-16:00
                            </h1>
                        </div>
                    </AnimatedElement>

                    <AnimatedElement delay={0.2}>
                        <div className={styles.cheliki}></div>
                    </AnimatedElement>
                </div>
            </div>
        </div>
    );
}
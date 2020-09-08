import React from 'react';
import useStyles from "./style"
import clsx from "clsx"
import Dotdotdot from 'react-dotdotdot'
import { useMediaQuery } from 'react-responsive'

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';



export default function AthleteMedia_Gallery({ data }) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' });
    const isTMobile = useMediaQuery({ query: '(max-width: 600px)' });


    const slidesQuantity = isTMobile ? 2 : 3
    const sliderWidth = isTMobile ? 200 : 175;
    const sliderHeight = isTMobile ? 226 : 180;

    const styles = useStyles();

    return (
        <div className={styles.container}>
            <CarouselProvider
                naturalSlideWidth={sliderWidth}
                naturalSlideHeight={sliderHeight}
                totalSlides={data.galleries.length}
                className={styles.provider}
                visibleSlides={slidesQuantity}
                dragEnabled={isTabletOrMobile}
            >
                <ButtonBack className={clsx(styles.button, styles.back)} />
                <Slider
                    className={styles.slider}
                >
                    {data.galleries.map((element) => (
                        <Slide
                            key={element.id}
                        >
                            <div className={styles.content}>
                                <a href={`http://media.issf.site/#/photos/:id/${element.id}`} target="_blank" >
                                    <div className={styles.image} style={{ backgroundImage: `url(${element.image.url})` }} />
                                    <div className={styles.title}>
                                        <Dotdotdot clamp={2}>
                                            {element.title}
                                        </Dotdotdot>
                                    </div>
                                </a>
                            </div>
                        </Slide>
                    ))}
                </Slider>
                <ButtonNext className={clsx(styles.button, styles.next)} />
            </CarouselProvider>
        </div>
    )
}


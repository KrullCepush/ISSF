import React from 'react';
import useStyles from "./style"
import moment from 'moment';
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



export default function AthleteMedia_Media({ data }) {
    const styles = useStyles();

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' });
    const isTMobile = useMediaQuery({ query: '(max-width: 600px)' });


    const slidesQuantity = isTMobile ? 2 : 3
    const sliderWidth = isTMobile ? 200 : 175;
    const sliderHeight = isTMobile ? 226 : 180;

    return (
        <div className={styles.container}>
            <CarouselProvider
                naturalSlideWidth={sliderWidth}
                naturalSlideHeight={sliderHeight}
                totalSlides={data.youtube_videos.length + data.articles.length}
                className={styles.provider}
                visibleSlides={slidesQuantity}
                dragEnabled={isTabletOrMobile}
            >
                <ButtonBack className={clsx(styles.button, styles.back)} />
                <Slider
                    className={styles.slider}
                >
                    {data.articles.map((element, index) => (
                        <Slide
                            key={index}
                            className={styles.slide}
                        >
                            <div className={styles.content}>
                                <a href={`http://issf.site/news/${element.id}`} target="_blank" >
                                    <div className={styles.tag}> #news </div>
                                    <div className={styles.image}
                                        style={{
                                            backgroundImage:
                                                `url(https://www.issf-sports.org/media/images/articles/${element.published_at.slice(0, 4)}/${element.id}/${element.old_image_name})`
                                        }} />


                                    <div className={styles.titleWrap}>
                                        <div className={styles.titleHead}>
                                            <Dotdotdot clamp={2}>
                                                {element.title}
                                            </Dotdotdot>
                                        </div>
                                        <div className={styles.titleData}>
                                            {moment(element.published_at).format("D.MM.YYYY") + ' by ISSF'}
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </Slide>
                    ))}
                    {data.youtube_videos.map((element, index) => (
                        <Slide
                            key={index}
                            className={styles.slide}
                        >
                            <div className={styles.content}>
                                <a href={`http://media.issf.site/#/videos/:id/${element.id}`} target="_blank" >
                                    <div className={styles.tag}> #video </div>
                                    <div className={styles.image} style={{ backgroundImage: `url(${element.image.url})` }} />
                                    <div className={styles.titleWrap}>
                                        <div className={styles.titleHead}>
                                            <Dotdotdot clamp={2}>
                                                {element.title}
                                            </Dotdotdot>
                                        </div>
                                        <div className={styles.titleData}>
                                            {moment(element.published_at).format("D.MM.YYYY") + ' by ISSF'}
                                        </div>
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


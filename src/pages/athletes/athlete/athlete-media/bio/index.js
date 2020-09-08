import React, { useState } from 'react';
import useStyles from "./style"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive'

import reduceList from "./helpers/reduceList"
import style from './style';


export default function AthleteMedia_Bio({ data }) {
    const databio = [{
        title: 'HEIGHT',
        value: data.height,
        id: 1
    }, {
        title: 'WEIGHT',
        value: data.weight,
        id: 2
    }, {
        title: 'RESIDENCE',
        value: data.residence,
        id: 3
    }, {
        title: 'PROFESSION',
        value: data.profession,
        id: 4
    }, {
        title: 'CLUB',
        value: data.club,
        id: 5
    }, {
        title: 'COMPETING START',
        value: data.competing_start_year,
        id: 6
    }, {
        title: 'Practising shooter since',
        value: data.shooting_start_year,
        id: 7
    }, {
        title: 'Personal Coach',
        value: data.coach,
        id: 8
    }, {
        title: 'National Coach',
        value: data.national_couch,
        id: 9
    }, {
        title: 'Handedness',
        value: data.hand,
        id: 10
    }, {
        title: 'National Coach',
        value: data.eye,
        id: 11
    }, {
        title: 'Place of birth',
        value: data.birth_place,
        id: 12
    }, {
        title: 'Hometown',
        value: data.hometown,
        id: 13
    }, {
        title: 'Marital status',
        value: data.marital_status,
        id: 14
    }, {
        title: 'Higher education',
        value: data.higher_education,
        id: 15
    }, {
        title: 'Hobbies',
        value: data.interests,
        id: 16
    }, {
        title: 'Languages',
        value: data.languages,
        id: 17
    }
    ]

    const [indexVisible, setIndexVisible] = useState(null)


    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' });
    const isTMobile = useMediaQuery({ query: '(max-width: 600px)' });

    const slidesQuantity = isTMobile ? 1 : 2
    const sliderWidth = isTMobile ? 300 : 330;
    const sliderHeight = isTMobile ? 169 : 226

    const styles = useStyles();
    const arrayInfo = reduceList(databio);

    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={sliderWidth}
                naturalSlideHeight={sliderHeight}
                totalSlides={arrayInfo.length}
                className={styles.provider}
                visibleSlides={slidesQuantity}
                dragEnabled={isTabletOrMobile}
            >
                <ButtonBack className={clsx(styles.button, styles.back)} />
                <Slider
                    className={styles.slider}
                >
                    {arrayInfo.map((array, index) => (
                        <Slide
                            key={index}
                        >
                            <div className={styles.content}>
                                {array.map((element) => (
                                    <div className={styles.blockBio} key={element.id}>
                                        <div className={styles.title}>
                                            {element.title}
                                        </div>
                                        <div className={styles.value}
                                            onClick={() => {
                                                element.value.length > 14 && setIndexVisible(element.id)
                                            }}
                                        >
                                            {element.value.length > 14 && <span className={styles.elementActive} />}
                                            <span> {element.value.slice(0, 14) + (element.value.length > 14 ? '...' : '')} </span>
                                        </div>
                                        {indexVisible == element.id && <div onClick={() => setIndexVisible(null)} className={styles.valueVisible}> {element.value} </div>}
                                    </div>
                                ))}
                            </div>
                        </Slide>
                    ))}
                </Slider>
                <ButtonNext className={clsx(styles.button, styles.next)} />
            </CarouselProvider >
        </div>
    )
}




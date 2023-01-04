import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";
import Image from "next/image";
import {
    mainFv,
} from '../assets'

const ImgSlide = () => {
    const { ref, inView, number } = useInView({
        /* Optional options */
        threshold: 0,
    });

    return (
        <div className="fv">
            <Image
                alt="fv"
                src={ mainFv } />
        </div>
    );
};
export default ImgSlide;

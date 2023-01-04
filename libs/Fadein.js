import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from "styled-components";

const Fadein = (props) => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    const { children } = props

    return (
        <Motion ref={ ref } inView={ inView }>
            { children }
        </Motion>
    );
};
export default Fadein;

const Motion = styled.div`
  transition: all 1s ease;
  transform: ${(props) => props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0.5)};
`; 
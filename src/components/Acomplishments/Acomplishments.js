import React, { useState, useRef, useEffect } from 'react';
import {
    Section,
    SectionDivider,
    SectionTitle,
} from '../../styles/GlobalComponents';
import {
    Boxes,
    Box,
    BoxNum,
    BoxText,
    BoxIcon,
    ModalOverlay,
    ModalContent,
} from './AcomplishmentsStyles';
import { certificates } from '../../constants/constants';

const Acomplishments = () => {
    const [hovered, setHovered] = useState(null);
    const hoverTimer = useRef(null);

    // cleanup on unmount
    useEffect(() => {
        return () => clearTimeout(hoverTimer.current);
    }, []);

    const handleMouseEnter = (id) => {
        // clear any existing timer
        clearTimeout(hoverTimer.current);
        // start a new 2s timer
        hoverTimer.current = setTimeout(() => {
            setHovered(id);
        }, 2000);
    };

    const handleMouseLeave = () => {
        // cancel the pending timer
        clearTimeout(hoverTimer.current);
        hoverTimer.current = null;
        // hide modal immediately
        setHovered(null);
    };

    return (
        <Section id="achievement">
            <SectionDivider />
            <SectionTitle>Certifications</SectionTitle>

            <Boxes>
                {certificates.map(({ id, title, image, issuer, pdfUrl }) => (
                    <Box
                        key={id}
                        onMouseEnter={() => handleMouseEnter(id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <BoxIcon src={image} alt={`${title} icon`} />
                        <BoxNum>{issuer}</BoxNum>
                        <BoxText>{title}</BoxText>

                        {hovered === id && pdfUrl && (
                            <ModalOverlay>
                                <ModalContent>
                                    <iframe
                                        src={pdfUrl}
                                        style={{width: '100%', height: '100%', border: 'none'}}
                                    />
                                </ModalContent>
                            </ModalOverlay>
                        )}
                    </Box>
                ))}
            </Boxes>
        </Section>
    );
};

export default Acomplishments;

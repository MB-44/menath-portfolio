'use client';

import { motion } from "framer-motion";

import { reveal } from "./variants";

interface ParallaxRevealProps {
    paragraph: string;
}

export function ParallaxReveal({ paragraph }: ParallaxRevealProps) {
    const words = paragraph
    .split(' ')
    .map((word: any, index: any) => ({id: index, word}));

    const text = words.map(({ id, word }) => (
        <span key={id} className="me-2 inline-flex overflow-hidden">
            <motion.span
                custom={id}
                variants={reveal}
                initial='initial'
                whileInView='open'
            >
                {word}
            </motion.span>
        </span>
    ));

    return <>{text}</>;
}
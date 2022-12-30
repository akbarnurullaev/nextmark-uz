import React from 'react';

type GradientTextProps = {
    text: string
    className?: string
}
export default function GradientText({ text, className = '' }: GradientTextProps) {
  return (
    <h1 className={`xl:text-9xl lg:text-8xl text-3xl text-dark text-outlined-gradient font-black uppercase text-center ${className}`}>{text}</h1>
  );
}

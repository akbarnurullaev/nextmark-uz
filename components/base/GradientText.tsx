import React from 'react';

type GradientTextProps = {
    text: string
    className?: string
}
export default function GradientText({ text, className = '' }: GradientTextProps) {
  return (
    <h1 className={`text-9xl text-dark text-outlined-gradient font-black uppercase text-center ${className}`}>{text}</h1>
  );
}

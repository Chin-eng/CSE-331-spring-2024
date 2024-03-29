import React from 'react';
import { createRoot } from 'react-dom/client';
import { fib } from './fib';


const main: HTMLElement | null = document.getElementById('main');
if (main === null) {
  console.log('Uh oh! no "main" element!');
} else {
  const root = createRoot(main);
  // const params: URLSearchParams = new URLSearchParams(window.location.search);

  // TODO: replace this when you get to problem 5
  root.render(<p>The 11th Fibonacci number is {Number(fib(11n))}</p>);
}


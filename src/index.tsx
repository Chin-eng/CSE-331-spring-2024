import React from 'react';
import { createRoot } from 'react-dom/client';
import { nextFib } from './fib';
import { isHighlyComposite, isPrime } from './prime';

const primeCheck = (n:bigint) : string => {
  if (isPrime(BigInt(n))) {
    return 'Your age is also prime';
  } 
  return '';
}

const isHighlyCompositeCheck = (n:bigint) : string => {
  if (isHighlyComposite(BigInt(n))) {
    return 'Your age is also highly composite';
  } 
  return '';
}

const main: HTMLElement | null = document.getElementById('main');
if (main === null) {
  console.log('Uh oh! no "main" element!');
} else {
  const root = createRoot(main);
  const params: URLSearchParams = new URLSearchParams(window.location.search);
  const firstNameVal: string | null = params.get('firstName');
  const ageVal: string | null = params.get('age');

  
  // TODO: replace this when you get to problem 5
  if (firstNameVal === null || ageVal === null) {
      root.render(
        <div>
          <form action="/">
            <p>Hi there! Please enter the following information:</p>
            <p>Your first name: <input type="text" name="firstName"></input></p>
            <p>Your age: <input type="number" name="age" min="0"></input></p>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      ); 
  } else {
    const age =parseInt(ageVal, 10);
    if (firstNameVal.trim().length === 0 || !firstNameVal) {
      root.render(
        <div>
          <p>Name must be non empty string</p>
        </div>
      );
    } else {
        if (isNaN(age) || age < 0 ) {
          root.render(
            <div>
              <p>age must be non negative number</p>
            </div>
          );
        } else {
          if (BigInt(age) === 0n) {
            root.render(
              <div>
                <p>age must be non zero</p>
              </div>
            );
          }
          const primeVal = primeCheck(BigInt(age));
          const isHighlyCompositeVal = isHighlyCompositeCheck(BigInt(age));
          if (nextFib(BigInt(age)) === BigInt(age)) {
            if (isPrime(BigInt(age))) {
              root.render(
                <div>
                  <p>Hi {firstNameVal}! Your age {ageVal} is a Fibonacci number. {primeVal}</p>
                  <a href='/'>Start Over</a>
                </div>
              );
            } else if (isHighlyCompositeCheck(BigInt(age))) {
              root.render(
                <div>
                  <p>Hi {firstNameVal}! Your age {ageVal} is a Fibonacci number. {isHighlyCompositeVal}</p>
                  <a href='/'>Start Over</a>
                </div>
              );
            } else {
              root.render(
                <div>
                  <p>Hi {firstNameVal}! Your age {ageVal} is a Fibonacci number.</p>
                  <a href='/'>Start Over</a>
                </div>
              );
            }
          } else {
            if (isPrime(BigInt(age))) {
              root.render(
                <div>
                  <p>hi {firstNameVal}! your age {ageVal} will be Fibanoci number in {Number(BigInt(nextFib(BigInt(age))) - BigInt(age))} years. {primeVal}</p>
                  <a href='/'>Start Over</a>
                </div>
              );
            } else if (isHighlyCompositeCheck(BigInt(age))) {
              root.render(
                <div>
                  <p>hi {firstNameVal}! your age {ageVal} will be Fibanoci number in {Number(BigInt(nextFib(BigInt(age))) - BigInt(age))} years. {isHighlyCompositeVal} </p>
                  <a href='/'>Start Over</a>
                </div>
              );
            } else {
              root.render(
                <div>
                  <p>hi {firstNameVal}! your age {ageVal} will be Fibanoci number in {Number(BigInt(nextFib(BigInt(age))) - BigInt(age))} years. {isHighlyCompositeVal} </p>
                  <a href='/'>Start Over</a>
                </div>
              );
            }
          }
        }

    }
  }
}


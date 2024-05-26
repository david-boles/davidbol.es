import React, { useState, useEffect } from 'react';
import { createUseStyles } from "react-jss";
import { components } from '../styling';
import { Head } from 'react-static';
import {Helmet} from "react-helmet";

const useStyles = createUseStyles(theme => ({
  background: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "max(100dvw, 3128*100dvh/3084)",
    height: "auto",
    "z-index": -1,
  },
  countdown: {
    "font-family": ["Poetsen One", "sans-serif"],
    "font-weight": 400,
    "font-style": "normal",
    "font-size": "max(40px, min(5svw, 60px))",
    "color": "#FFF",
    "text-shadow": "-1px -1px 1px #000, 1px -1px 5px #000, -1px 1px 1px #000, 1px 1px 5px #000",
    padding: [20, 40]
  },
  countdownSegment: {
    display: "inline-block",
    marginRight: 12
  },
  ishSegment: {
    display: "inline-block",
    marginLeft: 12,
    "font-size": "max(20px, min(2.5svw, 30px))",
  }
}))

export default function Countdown() {
  const {background, countdown, countdownSegment, ishSegment} = useStyles()

  const calculateTimeLeft = () => {
    const difference = new Date(1718481600000) - new Date();
    let timeLeft = {};

    let strings = []

    if (difference > 0) {
      const possible_strings = [
        ["year", Math.floor(difference / (1000 * 60 * 60 * 24 * 365))],
        ["day", Math.floor(difference / (1000 * 60 * 60 * 24))],
        ["hour", Math.floor((difference / (1000 * 60 * 60)) % 24)],
        ["minute", Math.floor((difference / 1000 / 60) % 60)],
        // ["second", Math.floor((difference / 1000) % 60)]
      ];

      while (true) {
        if (possible_strings[0][1] == 0) {
          possible_strings.shift()
        } else {
          break
        }
      }

      for (const [idx, [label, count]] of possible_strings.entries()) {
        strings.push(`${count} ${label}${count == 1 ? '' : 's'}${idx + 1 == possible_strings.length ? '' : ','}`)
      }

      console.log(timeLeft);
    }

    console.log(difference);
    return strings;
  };

  const [strings, setStrings] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setStrings(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={true}/>
        <link href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap" rel="stylesheet"/>
        <title>Together, at last.</title>
      </Head>
      <img className={background} src='/countdown_background.png'/>
      <div className={countdown}>
        {strings.map((str, idx) => (<span className={countdownSegment}>{str}{idx + 1 == strings.length ? <span className={ishSegment}>(ish)</span> : undefined}</span>))}
      </div>
    </>
  )
}
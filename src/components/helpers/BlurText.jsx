import { motion } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);
  const keyframes = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

export default function BlurText({
  text = "",
  delay = 80,
  className = "",
  animateBy = "chars",
  direction = "top",
  stepDuration = 0.35,
  onAnimationComplete
}) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [play, setPlay] = useState(false);
  const ref = useRef(null);

  // 🔥 Trigger animation immediately on mount
  useEffect(() => {
    setPlay(true);
  }, []);

  const from = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(12px)", opacity: 0, y: -40 }
        : { filter: "blur(12px)", opacity: 0, y: 40 },
    [direction]
  );

  const toSteps = useMemo(
    () => [
      { filter: "blur(4px)", opacity: 0.6, y: 6 },
      { filter: "blur(0px)", opacity: 1, y: 0 }
    ],
    []
  );

  const keyframes = buildKeyframes(from, toSteps);
  const times = [0, 0.5, 1];

  return (
    <span
      ref={ref}
      className={className}
      style={{ display: "inline-flex", flexWrap: "wrap" }}
    >
      {elements.map((segment, i) => (
        <motion.span
          key={i}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={from}
          animate={play ? keyframes : from}
          transition={{
            duration: stepDuration * 2,
            times,
            delay: (i * delay) / 1000,
            ease: "easeOut"
          }}
          onAnimationComplete={
            i === elements.length - 1 ? onAnimationComplete : undefined
          }
        >
          {segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && i < elements.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </span>
  );
}
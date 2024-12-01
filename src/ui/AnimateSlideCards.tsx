"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
type PropsType = {
  children: React.ReactNode;
  baseVelocity?: number;
  directionStart?: string;
  directionEnd?: string;
};
export default function AnimateSlideCards({
  children,
  baseVelocity,
  directionStart,
  directionEnd,
}: PropsType) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  /*
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  */

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [directionStart, directionEnd]
  );

  return (
    <motion.div
      ref={targetRef}
      className="slide_cards flex"
      style={{ translateX }}
    >
      {children}
    </motion.div>
  );
}

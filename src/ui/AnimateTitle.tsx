"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type PropsType = {
  children: React.ReactNode;
};

export default function AnimateTitle({ children }: PropsType) {
  const refTitle = useRef(null);
  const isInView = useInView(refTitle, {
    margin: "10px 0px -90px 0px",
    amount: "all",
  });
  return (
    <motion.div
      ref={refTitle}
      initial={{
        y: 25,
        opacity: 0,
      }}
      animate={{
        y: isInView ? 0 : 25,
        opacity: isInView ? 1 : 0,
      }}
    >
      {children}
    </motion.div>
  );
}

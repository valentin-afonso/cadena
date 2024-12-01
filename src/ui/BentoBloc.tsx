"use client";

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion, useTransform, useMotionValue } from "framer-motion";

export default function BentoBloc({ item }: { item: any }) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [16, -16]);
  const rotateY = useTransform(x, [0, 400], [-16, 16]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      className="flex flex-col justify-center items-center gap-7 bg-white dark:bg-bg-secondary-dark dark:text-gray-secondary-dark rounded-3xl text-center px-14 py-10 bento-shadow"
      style={{
        perspective: 400,
      }}
      onMouseMove={handleMouse}
    >
      <PrismicRichText field={item.title} />
      <PrismicRichText field={item.text} />
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
      >
        <PrismicNextImage field={item.image} />
      </motion.div>
    </motion.div>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../utils/cn";
import { useState } from "react";

const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("flex justify-center items-center flex-wrap py-5", className)}>
      {items.map((item, idx) => (
        <div key={item?.link} className="relative p-1" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span className="absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8]" layoutId="hoverBackground" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.15 } }} exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="w-[4rem] flex justify-center items-center gap-2">{item.title} <img src={item.link} alt="" className="w-10 ml-2"/></CardTitle>
            {/* <CardDescription></CardDescription> */}
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div className={cn("overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", className)}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold text-3xl tracking-wide mx-20", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p className={cn(" text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

export { HoverEffect, Card, CardTitle, CardDescription };

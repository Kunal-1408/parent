"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
  containerRef,
}: {
  children: React.ReactNode;
  className?: string;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    { initialX: -300, translateX: 2200, rotate: -50, duration: 12, repeatDelay: 5, delay: 1, className: "h-6" },
    { initialX: 0, translateX: 2000, rotate: -50, duration: 8, repeatDelay: 6, delay: 1, className: "h-6" },
    { initialX: 100, translateX: 2000, rotate: -50, duration: 12, repeatDelay: 5, delay: 1, className: "h-6" },
    { initialX: 300, translateX: 2400, rotate: -52, duration: 8, repeatDelay: 5, delay: 1, className: "h-10" },
    { initialX: 600, translateX: 2700, rotate: -52, duration: 14, repeatDelay: 6, delay: 2, className: "h-10" },
    { initialX: 900, translateX: 3200, rotate: -54, duration: 6, repeatDelay: 6, delay: 2, className: "h-10" },
    { initialX: 1200, translateX: 3200, rotate: -54, duration: 9, repeatDelay: 8, delay: 2, className: "h-12" },
    { initialX: 1100, translateX: 3200, rotate: -52, duration: 12, repeatDelay: 4, delay: 2, className: "h-12" },
    { initialX: 1500, translateX: 3200, rotate: -55, duration: 10, repeatDelay: 2, delay: 2, className: "h-16" },
     { initialX: -70, initialY: 280, translateX: 3000, rotate: -60, duration: 14, repeatDelay: 8, delay: 5, className: "h-18" }
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`${beam.initialX}-${index}-beam`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}
      {children}
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);
  const [hasCollided, setHasCollided] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected &&
        !hasCollided
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.querySelector('.max-w-5xl')?.getBoundingClientRect() || containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        // Check if beam intersects with the tilted container
        const containerTop = containerRect.top;
        const containerBottom = containerRect.bottom;
        const containerLeft = containerRect.left;
        const containerRight = containerRect.right;

        if (
          beamRect.bottom >= containerTop &&
          beamRect.top <= containerBottom &&
          beamRect.right >= containerLeft &&
          beamRect.left <= containerRight
        ) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.top - parentRect.top + beamRect.height / 2;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
          setHasCollided(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef, hasCollided]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        setHasCollided(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate={hasCollided ? "stop" : "animate"}
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
          stop: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
            transition: { duration: 0 }
          }
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: hasCollided ? 0 : Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-0 m-auto h-14 w-px rounded-full bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-blue-500 to-rose-500"
        />
      ))}
    </div>
  );
};

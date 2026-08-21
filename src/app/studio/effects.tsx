"use client";

import { motion } from "framer-motion";
import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

/* ---------------------------------------------------------------- */
/* CursorFluid — a glowing red trail that follows the mouse like     */
/* smoke pushed through fluid. Canvas overlay, additive blending.    */
/* Skipped on touch devices and when reduced motion is preferred.    */
/* ---------------------------------------------------------------- */

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  radius: number;
};

export const CursorFluid = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -100, y: -100 };
    // head lerps behind the real cursor — this lag is what sells the fluid feel
    const head = { x: -100, y: -100 };
    let hasMoved = false;
    const particles: Particle[] = [];

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!hasMoved) {
        head.x = mouse.x;
        head.y = mouse.y;
        hasMoved = true;
      }
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      raf = requestAnimationFrame(tick);

      const dx = mouse.x - head.x;
      const dy = mouse.y - head.y;
      head.x += dx * 0.16;
      head.y += dy * 0.16;
      const speed = Math.hypot(dx, dy);

      if (hasMoved && speed > 0.6) {
        const count = Math.min(4, Math.ceil(speed / 14) + 1);
        for (let i = 0; i < count; i++) {
          particles.push({
            x: head.x + (Math.random() - 0.5) * 6,
            y: head.y + (Math.random() - 0.5) * 6,
            vx: dx * 0.02 + (Math.random() - 0.5) * 0.8,
            vy: dy * 0.02 + (Math.random() - 0.5) * 0.8,
            life: 0,
            maxLife: 38 + Math.random() * 26,
            radius: 9 + Math.min(26, speed * 0.4) + Math.random() * 8,
          });
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;

        const t = p.life / p.maxLife;
        const alpha = 0.16 * (1 - t);
        const r = p.radius * (1 + t * 1.6);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        g.addColorStop(0, `rgba(229,72,77,${alpha})`);
        g.addColorStop(0.55, `rgba(229,72,77,${alpha * 0.4})`);
        g.addColorStop(1, "rgba(229,72,77,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // cursor core glow
      if (hasMoved) {
        const g = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 22);
        g.addColorStop(0, "rgba(255,107,112,.28)");
        g.addColorStop(1, "rgba(229,72,77,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(head.x, head.y, 22, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 85,
        pointerEvents: "none",
      }}
    />
  );
};

/* ---------------------------------------------------------------- */
/* ScrambleText — terminal-style decode effect. Runs once when the   */
/* element mounts and again every time the pointer enters it.        */
/* ---------------------------------------------------------------- */

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01";

export const ScrambleText = ({
  text,
  play = true,
  className,
  style,
}: {
  text: string;
  play?: boolean;
  className?: string;
  style?: CSSProperties;
}) => {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const rafRef = useRef(0);

  const run = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    frameRef.current = 0;
    const totalFrames = Math.max(18, text.length * 2.2);

    const step = () => {
      frameRef.current++;
      const progress = frameRef.current / totalFrames;
      const resolved = Math.floor(progress * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " " || i < resolved) {
          out += ch;
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  }, [text]);

  useEffect(() => {
    if (play) run();
    return () => cancelAnimationFrame(rafRef.current);
  }, [play, run]);

  return (
    <span
      className={className}
      style={style}
      onMouseEnter={run}
      aria-label={text}
    >
      {display}
    </span>
  );
};

/* ---------------------------------------------------------------- */
/* Reveal — fade-up on scroll into view (once), with stagger delay.  */
/* ---------------------------------------------------------------- */

export const Reveal = ({
  children,
  delay = 0,
  y = 26,
  style,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  style?: CSSProperties;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.55, ease: "easeOut", delay }}
    style={style}
    className={className}
  >
    {children}
  </motion.div>
);

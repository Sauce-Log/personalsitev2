"use client";
import { useEffect, useRef } from "react";

/**
 * ParticleBackground Component
 *
 * A React component that renders an animated particle background using HTML5 Canvas.
 * Creates 120 floating particles that move across the screen with wrap-around behavior.
 * The background is fixed and covers the entire viewport.
 */
export default function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w: number, h: number;

    /**
     * Resizes the canvas to match the window dimensions
     */
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    // Create 120 particles with random properties
    const particles = Array.from({ length: 128 }, () => ({
      x: Math.random() * w, // Random x position
      y: Math.random() * h, // Random y position
      r: Math.random() * 5 + 0.5, // Random radius (0.5-5.5px)
      dx: (Math.random() - 0.5) * 0.25, // Random x velocity (-0.125 to 0.125)
      dy: (Math.random() - 0.5) * 0.25, // Random y velocity (-0.125 to 0.125)
    }));

    /**
     * Animation loop that renders particles and updates their positions
     */
    const animate = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // Create radial gradient for glow effect
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0, // Inner circle (center)
          p.x,
          p.y,
          p.r * 3 // Outer circle (glow radius)
        );

        // Add gradient stops for firefly-like glow
        // gradient.addColorStop(0, `rgba(37, 150, 190, 0.4)`); // Bright center
        // gradient.addColorStop(0.3, `rgba(37, 150, 190, 0.35)`); // Medium glow
        // gradient.addColorStop(0.7, `rgba(37, 150, 190, 0.25)`); // Soft glow
        // gradient.addColorStop(1, `rgba(37, 150, 190, 0)`); // Transparent edge

        // Alternate "firefly" style
        gradient.addColorStop(0.0, `rgba(192, 74, 188, 0.8)`); // Bright center
        gradient.addColorStop(0.3, `rgba(192, 74, 188, 0.4)`); // Medium glow
        gradient.addColorStop(0.7, `rgba(192, 74, 188, 0.0)`); // Soft glow
        gradient.addColorStop(1, `rgba(37, 150, 190, 0)`); // Transparent edge

        // Apply the gradient
        ctx.fillStyle = gradient;

        // Draw the glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();

        // Draw a smaller, brighter core UNCOMMENT THIS FOR CORE STYLE

        // ctx.fillStyle = `rgba(37, 150, 190, 0)`;
        // ctx.beginPath();
        // ctx.arc(p.x, p.y, p.r * 0.6, 0, Math.PI * 2);
        // ctx.fill();

        // Update particle position
        p.x += p.dx;
        p.y += p.dy;

        // Wrap particles around screen edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup: remove resize event listener
    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={ref} className="fixed inset-0" />;
}

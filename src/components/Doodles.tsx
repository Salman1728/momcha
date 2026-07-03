import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WhiskDoodle(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g {...stroke}>
        <path d="M30 6l10 10" />
        <path d="M28 10c-8 2-16 10-14 18 1 5 7 7 12 4 7-4 12-13 12-19" />
        <path d="M25 13c-4 4-7 11-5 16" />
        <path d="M32 17c-2 5-6 10-11 12" />
      </g>
    </svg>
  );
}

export function HeartDoodle(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        {...stroke}
        d="M24 40C14 32 6 25 7 17c1-6 8-9 13-5 2 1 3 3 4 5 1-2 2-4 4-5 5-4 12-1 13 5 1 8-7 15-17 23z"
      />
    </svg>
  );
}

export function CupDoodle(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g {...stroke}>
        <path d="M10 18h26l-3 16a5 5 0 0 1-5 4H18a5 5 0 0 1-5-4z" />
        <path d="M36 20c4 0 6 2 5 5s-4 4-7 3" />
        <path d="M8 44h32" />
        <path d="M19 10c0-2 2-2 2-4M27 10c0-2 2-2 2-4" />
      </g>
    </svg>
  );
}

export function SparkleDoodle(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g {...stroke}>
        <path d="M24 8v10M24 30v10M8 24h10M30 24h10" />
        <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function SwirlDoodle(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        {...stroke}
        d="M10 34c4-14 16-24 26-22 7 2 6 11-1 12-6 1-9-6-4-10"
      />
    </svg>
  );
}

export function LeafDoodle(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g {...stroke}>
        <path d="M24 42C12 34 10 18 26 8c14 10 12 26 -2 34z" />
        <path d="M24 40V16" />
        <path d="M24 26l7-6M24 32l-7-6" />
      </g>
    </svg>
  );
}

export function SteamDoodle(props: P) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <g {...stroke}>
        <path d="M16 40c-3-5 3-8 0-13M24 42c-3-5 3-8 0-13M32 40c-3-5 3-8 0-13" />
      </g>
    </svg>
  );
}

/* Decorative field of floating doodles for section backgrounds */
export function DoodleField({
  tone = "text-blue/20",
}: {
  tone?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${tone}`}
    >
      <WhiskDoodle className="absolute left-[4%] top-[12%] w-12 animate-floaty" style={{ ["--tilt" as string]: "-12deg" }} />
      <HeartDoodle className="absolute right-[6%] top-[8%] w-8 animate-floaty-alt" style={{ ["--tilt" as string]: "10deg" }} />
      <CupDoodle className="absolute left-[8%] bottom-[14%] w-10 animate-floaty-alt" style={{ ["--tilt" as string]: "8deg" }} />
      <SparkleDoodle className="absolute right-[10%] bottom-[20%] w-8 animate-floaty" />
      <SwirlDoodle className="absolute left-[46%] top-[6%] w-10 animate-floaty" style={{ ["--tilt" as string]: "6deg" }} />
      <LeafDoodle className="absolute right-[30%] bottom-[8%] w-8 animate-floaty-alt" style={{ ["--tilt" as string]: "-8deg" }} />
    </div>
  );
}

/* Painterly brush edge between a blue section and the page background */
export function BrushEdge({
  flip = false,
  className = "text-blue",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 44"
      preserveAspectRatio="none"
      aria-hidden
      className={`brush-edge ${className} ${flip ? "rotate-180" : ""}`}
    >
      <path
        fill="currentColor"
        d="M0 0h1440v10c-60 14-130 6-190 14s-90-10-160-4-120 16-190 10-130-16-200-8-110 18-180 12S390 18 320 24 180 40 110 30 40 14 0 22z"
      />
    </svg>
  );
}

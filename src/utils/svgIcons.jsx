import React from "react";

export function SignSVG({ type }) {
  switch (type) {
    case "danger_turn_right":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" strokeWidth="9" strokeLinejoin="round"/>
          <path d="M 45 72 L 45 48 C 45 40 58 40 58 48 L 58 50 M 52 42 L 58 50 L 64 42" fill="none" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "danger_pedestrian":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" strokeWidth="9" strokeLinejoin="round"/>
          <circle cx="50" cy="38" r="5" fill="#0f172a"/>
          <path d="M 50 43 L 50 62 M 50 50 L 42 58 M 50 50 L 58 56 M 50 62 L 44 76 M 50 62 L 56 76" stroke="#0f172a" strokeWidth="4" strokeLinecap="round"/>
          <line x1="30" y1="80" x2="70" y2="80" stroke="#0f172a" strokeWidth="3" strokeDasharray="6,4"/>
        </svg>
      );
    case "prohib_no_entry":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#dc2626"/>
          <rect x="20" y="42" width="60" height="16" rx="3" fill="#ffffff"/>
        </svg>
      );
    case "prohib_speed_50":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" strokeWidth="9"/>
          <text x="50" y="62" fontSize="38" fontWeight="900" textAnchor="middle" fill="#0f172a" fontFamily="Outfit, sans-serif">50</text>
        </svg>
      );
    case "mand_roundabout":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#0284c7"/>
          <path d="M 50 24 A 26 26 0 1 1 24 50" fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round"/>
          <polygon points="50,16 50,32 60,24" fill="#ffffff"/>
          <polygon points="16,50 32,50 24,60" fill="#ffffff"/>
        </svg>
      );
    case "priority_stop":
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,30" fill="#dc2626" stroke="#ffffff" strokeWidth="3"/>
          <text x="50" y="58" fontSize="24" fontWeight="900" textAnchor="middle" fill="#ffffff" fontFamily="Outfit, sans-serif">STOP</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#334155"/>
          <text x="50" y="58" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#ffffff">?</text>
        </svg>
      );
  }
}

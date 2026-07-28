// DriveRwanda SVG Road Sign Vector Generators

export function renderSignSVG(type) {
  switch (type) {
    case "danger_turn_right":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 45 72 L 45 48 C 45 40 58 40 58 48 L 58 50 M 52 42 L 58 50 L 64 42" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    case "danger_turn_left":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 55 72 L 55 48 C 55 40 42 40 42 48 L 42 50 M 48 42 L 42 50 L 36 42" fill="none" stroke="#0f172a" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    case "danger_double_curve":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 42 75 C 42 60 58 60 58 48 C 58 38 42 38 42 32 M 36 38 L 42 30 L 48 38" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    case "danger_pedestrian":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="50" cy="38" r="5" fill="#0f172a"/>
          <path d="M 50 43 L 50 62 M 50 50 L 42 58 M 50 50 L 58 56 M 50 62 L 44 76 M 50 62 L 56 76" stroke="#0f172a" stroke-width="4" stroke-linecap="round"/>
          <line x1="30" y1="80" x2="70" y2="80" stroke="#0f172a" stroke-width="3" stroke-dasharray="6,4"/>
        </svg>
      `;
    case "danger_children":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" stroke-width="9" stroke-linejoin="round"/>
          <circle cx="42" cy="40" r="4" fill="#0f172a"/>
          <path d="M 42 44 L 42 60 M 42 52 L 35 58 M 42 52 L 48 58 M 42 60 L 38 72 M 42 60 L 46 72" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="60" cy="46" r="3.5" fill="#0f172a"/>
          <path d="M 60 49.5 L 60 63 M 60 56 L 54 62 M 60 56 L 65 62 M 60 63 L 57 73 M 60 63 L 63 73" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `;
    case "danger_steep_descent":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" stroke-width="9" stroke-linejoin="round"/>
          <polygon points="25,82 75,82 25,50" fill="#0f172a"/>
          <text x="52" y="65" font-size="12" font-weight="bold" fill="#0f172a" font-family="sans-serif">10%</text>
        </svg>
      `;
    case "danger_road_narrows":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,90 6,90" fill="#ffffff" stroke="#dc2626" stroke-width="9" stroke-linejoin="round"/>
          <path d="M 32 78 L 32 60 C 32 50 42 45 42 38 L 42 32 M 68 78 L 68 60 C 68 50 58 45 58 38 L 58 32" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
        </svg>
      `;
    case "prohib_no_entry":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#dc2626"/>
          <rect x="20" y="42" width="60" height="16" rx="3" fill="#ffffff"/>
        </svg>
      `;
    case "prohib_speed_50":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="9"/>
          <text x="50" y="62" font-size="38" font-weight="900" text-anchor="middle" fill="#0f172a" font-family="Outfit, sans-serif">50</text>
        </svg>
      `;
    case "prohib_no_overtaking":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#dc2626" stroke-width="9"/>
          <!-- Red car left -->
          <rect x="25" y="42" width="20" height="26" rx="4" fill="#dc2626"/>
          <!-- Black car right -->
          <rect x="55" y="42" width="20" height="26" rx="4" fill="#0f172a"/>
        </svg>
      `;
    case "prohib_no_parking":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#1e3a8a" stroke="#dc2626" stroke-width="9"/>
          <text x="50" y="62" font-size="40" font-weight="900" text-anchor="middle" fill="#ffffff" font-family="Outfit, sans-serif">P</text>
          <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="8"/>
        </svg>
      `;
    case "prohib_no_stopping":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#1e3a8a" stroke="#dc2626" stroke-width="9"/>
          <line x1="22" y1="22" x2="78" y2="78" stroke="#dc2626" stroke-width="8"/>
          <line x1="78" y1="22" x2="22" y2="78" stroke="#dc2626" stroke-width="8"/>
        </svg>
      `;
    case "mand_right_turn":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#0284c7"/>
          <path d="M 38 68 L 38 48 C 38 42 42 38 48 38 L 60 38 M 52 28 L 64 38 L 52 48" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;
    case "mand_roundabout":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#0284c7"/>
          <path d="M 50 24 A 26 26 0 1 1 24 50" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
          <polygon points="50,16 50,32 60,24" fill="#ffffff"/>
          <polygon points="16,50 32,50 24,60" fill="#ffffff"/>
        </svg>
      `;
    case "mand_min_speed_30":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#0284c7"/>
          <text x="50" y="62" font-size="38" font-weight="900" text-anchor="middle" fill="#ffffff" font-family="Outfit, sans-serif">30</text>
        </svg>
      `;
    case "priority_stop":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,30" fill="#dc2626" stroke="#ffffff" stroke-width="3"/>
          <text x="50" y="58" font-size="24" font-weight="900" text-anchor="middle" fill="#ffffff" font-family="Outfit, sans-serif">STOP</text>
        </svg>
      `;
    case "priority_give_way":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="6,10 94,10 50,90" fill="#ffffff" stroke="#dc2626" stroke-width="9" stroke-linejoin="round"/>
        </svg>
      `;
    case "priority_main_road":
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <polygon points="50,6 94,50 50,94 6,50" fill="#ffffff" stroke="#0f172a" stroke-width="3"/>
          <polygon points="50,22 78,50 50,78 22,50" fill="#f59e0b"/>
        </svg>
      `;
    default:
      return `
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <circle cx="50" cy="50" r="44" fill="#334155"/>
          <text x="50" y="58" font-size="28" font-weight="bold" text-anchor="middle" fill="#ffffff">?</text>
        </svg>
      `;
  }
}

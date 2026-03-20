export function DressHero({ className = "w-64 h-80" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 300" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Elegant ballroom dress */}
      <defs>
        <linearGradient id="dressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C41E3A" />
          <stop offset="50%" stopColor="#E8304A" />
          <stop offset="100%" stopColor="#C41E3A" />
        </linearGradient>
        <linearGradient id="skirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C41E3A" />
          <stop offset="100%" stopColor="#8B1528" />
        </linearGradient>
        <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C8920A" />
          <stop offset="50%" stopColor="#E8B84A" />
          <stop offset="100%" stopColor="#C8920A" />
        </linearGradient>
      </defs>
      {/* Hanger */}
      <path d="M85 20 Q100 5 115 20" stroke="#C8920A" strokeWidth="2" fill="none" />
      <circle cx="100" cy="12" r="4" fill="none" stroke="#C8920A" strokeWidth="1.5" />
      {/* Bodice */}
      <path
        d="M75 45 Q78 35 100 30 Q122 35 125 45 L120 90 Q100 95 80 90 Z"
        fill="url(#dressGrad)"
      />
      {/* Neckline decoration */}
      <path
        d="M80 42 Q90 38 100 36 Q110 38 120 42"
        stroke="url(#goldAccent)"
        strokeWidth="2"
        fill="none"
      />
      {/* Waist belt */}
      <rect x="78" y="86" width="44" height="6" rx="2" fill="url(#goldAccent)" />
      {/* Skirt */}
      <path
        d="M78 92 Q40 180 30 270 Q100 285 170 270 Q160 180 122 92 Z"
        fill="url(#skirtGrad)"
      />
      {/* Skirt flow lines */}
      <path d="M70 140 Q85 160 60 220" stroke="#E8304A" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M130 140 Q115 160 140 220" stroke="#E8304A" strokeWidth="0.8" fill="none" opacity="0.5" />
      <path d="M90 95 Q88 160 75 250" stroke="#E8304A" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M110 95 Q112 160 125 250" stroke="#E8304A" strokeWidth="0.5" fill="none" opacity="0.3" />
      {/* Bottom ruffle */}
      <path
        d="M30 270 Q50 260 70 272 Q90 280 100 270 Q110 280 130 272 Q150 260 170 270"
        stroke="#8B1528"
        strokeWidth="1"
        fill="none"
      />
      {/* Sparkle accents */}
      <g fill="#E8B84A" opacity="0.8">
        <polygon points="60,120 62,124 66,124 63,127 64,131 60,128 56,131 57,127 54,124 58,124" />
        <polygon points="140,130 141.5,133 145,133 142.5,135 143.5,138 140,136 136.5,138 137.5,135 135,133 138.5,133" />
        <polygon points="100,110 101.5,113 105,113 102.5,115 103.5,118 100,116 96.5,118 97.5,115 95,113 98.5,113" />
        <polygon points="50,190 51,192.5 54,192.5 52,194.5 52.5,197 50,195.5 47.5,197 48,194.5 46,192.5 49,192.5" />
        <polygon points="145,200 146,202.5 149,202.5 147,204.5 147.5,207 145,205.5 142.5,207 143,204.5 141,202.5 144,202.5" />
      </g>
    </svg>
  );
}

export function DressCard({
  variant,
  className = "w-full h-full",
}: {
  variant: "beginner" | "social" | "competition";
  className?: string;
}) {
  const configs = {
    beginner: {
      bodyColor: "#5B8FB9",
      skirtColor: "#4A7FA9",
      accentColor: "#7BB3D9",
      simple: true,
    },
    social: {
      bodyColor: "#1A237E",
      skirtColor: "#0D1654",
      accentColor: "#3F51B5",
      simple: false,
    },
    competition: {
      bodyColor: "#C41E3A",
      skirtColor: "#8B1528",
      accentColor: "#E8B84A",
      simple: false,
    },
  };

  const c = configs[variant];

  return (
    <svg viewBox="0 0 120 180" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`body-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={c.bodyColor} />
          <stop offset="100%" stopColor={c.accentColor} />
        </linearGradient>
      </defs>
      {/* Bodice */}
      <path
        d={`M45 25 Q48 18 60 15 Q72 18 75 25 L72 55 Q60 58 48 55 Z`}
        fill={`url(#body-${variant})`}
      />
      {/* Skirt */}
      <path
        d={c.simple
          ? "M47 55 Q30 110 25 165 Q60 172 95 165 Q90 110 73 55 Z"
          : "M46 55 Q25 120 18 165 Q60 175 102 165 Q95 120 74 55 Z"
        }
        fill={c.skirtColor}
      />
      {/* Waist */}
      <rect x="46" y="53" width="28" height="4" rx="1.5" fill={c.accentColor} />
      {variant === "competition" && (
        <g fill="#E8B84A" opacity="0.7">
          <polygon points="40,90 41,92 43,92 41.5,93.5 42,95.5 40,94.5 38,95.5 38.5,93.5 37,92 39,92" />
          <polygon points="80,95 81,97 83,97 81.5,98.5 82,100.5 80,99.5 78,100.5 78.5,98.5 77,97 79,97" />
          <polygon points="60,80 61,82 63,82 61.5,83.5 62,85.5 60,84.5 58,85.5 58.5,83.5 57,82 59,82" />
          <polygon points="35,130 36,132 38,132 36.5,133.5 37,135.5 35,134.5 33,135.5 33.5,133.5 32,132 34,132" />
          <polygon points="85,125 86,127 88,127 86.5,128.5 87,130.5 85,129.5 83,130.5 83.5,128.5 82,127 84,127" />
        </g>
      )}
      {/* Bottom ruffle */}
      {!c.simple && (
        <path
          d={`M18 165 Q35 158 50 166 Q65 172 80 164 Q95 158 102 165`}
          stroke={c.accentColor}
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
      )}
    </svg>
  );
}

export function CollectionDress({
  color,
  index,
  className = "w-full h-full",
}: {
  color: string;
  index: number;
  className?: string;
}) {
  const designs = [
    // Design 1: A-line elegant
    (c: string) => (
      <>
        <path d="M48 30 Q50 22 60 20 Q70 22 72 30 L70 58 Q60 61 50 58 Z" fill={c} />
        <path d="M49 58 Q32 110 25 165 Q60 172 95 165 Q88 110 71 58 Z" fill={c} opacity="0.85" />
        <rect x="48" y="56" width="24" height="3.5" rx="1.5" fill="#E8B84A" />
      </>
    ),
    // Design 2: Mermaid silhouette
    (c: string) => (
      <>
        <path d="M47 28 Q50 20 60 18 Q70 20 73 28 L71 56 Q60 59 49 56 Z" fill={c} />
        <path d="M49 56 Q46 90 45 120 Q42 145 28 168 Q60 175 92 168 Q78 145 75 120 Q74 90 71 56 Z" fill={c} opacity="0.85" />
        <rect x="47" y="54" width="26" height="3.5" rx="1.5" fill="#E8B84A" />
        <path d="M28 168 Q45 160 60 170 Q75 160 92 168" stroke={c} strokeWidth="1" fill="none" opacity="0.5" />
      </>
    ),
    // Design 3: Full volume ball gown
    (c: string) => (
      <>
        <path d="M46 32 Q50 22 60 20 Q70 22 74 32 L71 55 Q60 58 49 55 Z" fill={c} />
        <path d="M48 55 Q20 115 15 168 Q60 178 105 168 Q100 115 72 55 Z" fill={c} opacity="0.85" />
        <rect x="47" y="53" width="26" height="3.5" rx="1.5" fill="#E8B84A" />
        <path d="M30 130 Q45 125 60 132 Q75 125 90 130" stroke="#E8B84A" strokeWidth="0.6" fill="none" opacity="0.4" />
      </>
    ),
    // Design 4: Asymmetric modern
    (c: string) => (
      <>
        <path d="M44 30 Q48 20 60 18 Q72 20 74 28 L72 56 Q60 60 48 56 Z" fill={c} />
        <path d="M47 56 Q28 105 22 145 Q20 158 20 168 Q60 175 100 168 Q96 120 72 56 Z" fill={c} opacity="0.85" />
        <rect x="46" y="54" width="27" height="3.5" rx="1.5" fill="#E8B84A" />
        <path d="M35 100 Q30 130 22 160" stroke="#E8B84A" strokeWidth="0.5" fill="none" opacity="0.3" />
      </>
    ),
  ];

  return (
    <svg viewBox="0 0 120 185" className={className} xmlns="http://www.w3.org/2000/svg">
      {designs[index % designs.length](color)}
    </svg>
  );
}

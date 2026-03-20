export default function HimawariLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Petals */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="20"
          rx="10"
          ry="20"
          fill="#E8B84A"
          opacity="0.9"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      {/* Inner petals */}
      {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="25"
          rx="8"
          ry="16"
          fill="#C8920A"
          opacity="0.85"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      {/* Center */}
      <circle cx="50" cy="50" r="16" fill="#8B6914" />
      <circle cx="50" cy="50" r="12" fill="#6B4F10" />
      {/* Center texture dots */}
      {[
        [47, 47], [53, 47], [50, 44], [44, 50], [56, 50],
        [47, 53], [53, 53], [50, 56], [50, 50],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="1.5" fill="#C8920A" opacity="0.6" />
      ))}
    </svg>
  );
}

const TestimonialLogo = () => {
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
    >
      {/* Outer Circle */}
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="url(#gradient1)"
        strokeWidth="8"
        fill="none"
      />

      {/* Diamond Shape */}
      <polygon
        points="100,20 140,100 100,180 60,100"
        fill="url(#gradient2)"
      />

      {/* Curved Path */}
      <path
        d="M20 160 C50 120, 150 120, 180 160"
        stroke="url(#gradient3)"
        strokeWidth="6"
        fill="none"
      />

      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f12711" />
          <stop offset="100%" stopColor="#f5af19" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12c2e9" />
          <stop offset="100%" stopColor="#c471ed" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fcb045" />
          <stop offset="100%" stopColor="#fd1d1d" />
        </linearGradient>
      </defs>
    </svg>
    )
}

export default TestimonialLogo
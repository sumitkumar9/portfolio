/**
 * Geometric decorative elements inspired by the reference design
 * Angular bracket-like shapes that add visual interest to the layout
 */

// Left-pointing angular bracket
export const LeftBracket = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
    >
      <path
        d="M30 12L18 24L30 36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Right-pointing angular bracket
export const RightBracket = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20"
  };

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className}`}
    >
      <path
        d="M18 12L30 24L18 36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Decorative element container for positioning
export const DecorativeElements = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      {/* Left decorative element */}
      <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-accent-500 opacity-30 hidden lg:block">
        <LeftBracket size="lg" />
      </div>
      {/* Right decorative element */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-accent-500 opacity-30 hidden lg:block">
        <RightBracket size="lg" />
      </div>
    </div>
  );
};

// Floating decorative elements for background
export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top left */}
      <div className="absolute top-20 left-10 text-accent-500 opacity-10">
        <LeftBracket size="xl" />
      </div>
      {/* Top right */}
      <div className="absolute top-32 right-20 text-accent-500 opacity-10">
        <RightBracket size="lg" />
      </div>
      {/* Bottom left */}
      <div className="absolute bottom-40 left-20 text-accent-500 opacity-10">
        <RightBracket size="md" />
      </div>
      {/* Bottom right */}
      <div className="absolute bottom-20 right-10 text-accent-500 opacity-10">
        <LeftBracket size="lg" />
      </div>
    </div>
  );
};

export default {
  LeftBracket,
  RightBracket,
  DecorativeElements,
  FloatingElements
};

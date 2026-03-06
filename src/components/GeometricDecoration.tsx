const GeometricDecoration = ({ className = "", position = "left" }: { className?: string; position?: "left" | "right" }) => {
  const isLeft = position === "left";
  
  return (
    <div className={`absolute ${isLeft ? "left-0 top-0" : "right-0 bottom-0"} pointer-events-none ${className}`}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
        className={isLeft ? "" : "rotate-180"}>
        <polygon points="0,0 80,0 0,80" fill="hsl(210 50% 18%)" />
        <polygon points="40,0 120,0 40,80" fill="hsl(195 35% 55% / 0.5)" />
        <polygon points="0,40 60,40 0,100" fill="hsl(210 40% 30% / 0.7)" />
        <polygon points="80,0 140,0 80,60" fill="hsl(195 40% 80% / 0.6)" />
        <polygon points="0,80 50,80 0,130" fill="hsl(195 35% 55% / 0.4)" />
      </svg>
    </div>
  );
};

export default GeometricDecoration;

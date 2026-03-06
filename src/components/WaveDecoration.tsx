const WaveDecoration = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 400 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flip ? "scale-x-[-1]" : ""}`}
  >
    <path
      d="M0 40C30 20 60 60 90 40C120 20 150 60 180 40C210 20 240 60 270 40C300 20 330 60 360 40C390 20 400 30 400 30"
      stroke="hsl(195 40% 80%)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M0 55C30 35 60 75 90 55C120 35 150 75 180 55C210 35 240 75 270 55C300 35 330 75 360 55C390 35 400 45 400 45"
      stroke="hsl(195 40% 80% / 0.5)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

export default WaveDecoration;

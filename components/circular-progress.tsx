export default function CircularProgress() {
  return (
    <div className="relative flex items-center justify-center">
      <svg
        className="h-16 w-16 animate-spin"
        width="100"
        height="100"
        viewBox="0 0 200 200"
      >
        <circle
          className="text-gray-300"
          strokeWidth="15"
          stroke="currentColor"
          fill="transparent"
          r="90"
          cx="100"
          cy="100"
        />
        <circle
          className="text-gray-500"
          strokeWidth="15"
          strokeDasharray="565.48"
          strokeDashoffset="100"
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="90"
          cx="100"
          cy="100"
        />
      </svg>
    </div>
  );
}

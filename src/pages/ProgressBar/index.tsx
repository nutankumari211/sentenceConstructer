import { ProgressBarProps } from "@/lib/interfaces";

/* Progress bar at the top of each sentence */
const ProgressBar: React.FC<ProgressBarProps> = ({ total, currentIndex }) => {
  return (
    <div className="flex gap-2 mb-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded-sm ${
            index < currentIndex ? "bg-orange-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;

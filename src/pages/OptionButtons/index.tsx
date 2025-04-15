import { Button } from "@/components/ui/button";
import { OptionButtonsProps } from "@/lib/interfaces";

/* It is used to display the options in feedback page */

const OptionButtons: React.FC<OptionButtonsProps> = ({
  options,
  selectedAnswers,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {options?.map((option, index) => (
        <Button
          key={index}
          onClick={() => onSelect(option)}
          disabled={selectedAnswers?.includes(option)}
          className={`px-4 py-2 rounded-full border text-sm ${
            selectedAnswers.includes(option)
              ? "bg-gray-200 text-gray-600 cursor-not-allowed"
              : "bg-white text-black border-gray-400 hover:bg-gray-100"
          }`}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default OptionButtons;

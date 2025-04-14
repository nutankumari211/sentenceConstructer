import { SentenceWithBlanksProps } from "@/lib/interfaces";
import React from "react";

const SentenceWithBlanks: React.FC<SentenceWithBlanksProps> = ({
  question,
  correctAnswerLength,
  selectedAnswers,
  onUnselectAnswer,
}) => {
  const parts = question.split("_____________");

  return (
    <div className="flex flex-wrap justify-center gap-y-3 text-base sm:text-lg font-medium leading-relaxed">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          <span className="mx-1">{part}</span>
          {index < correctAnswerLength &&
            (selectedAnswers[index] ? (
              <span
                onClick={() => onUnselectAnswer(index)}
                className="inline-block mx-1 px-3 py-1 bg-gray-200 text-black rounded-full cursor-pointer border"
              >
                {selectedAnswers[index]}
              </span>
            ) : (
              <span className="inline-block mx-1 px-3 py-1 bg-gray-100 rounded-full border">
                ____________
              </span>
            ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SentenceWithBlanks;

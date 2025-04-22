import { SentenceWithBlanksProps } from "@/lib/interfaces";
import React from "react";

const SentenceWithBlanks: React.FC<SentenceWithBlanksProps> = ({
  question,
  correctAnswerLength,
  selectedAnswers,
  onUnselectAnswer,
}) => {
  const parts = question?.split("_____________");

  return (
    <div className="text-center whitespace-pre-wrap">
      {parts?.map((part, index) => (
        <React.Fragment key={index}>
          <span className="inline my-1">{part}</span>
          {index < correctAnswerLength && (
            <span className="inline-block mx-1">
              {selectedAnswers[index] ? (
                <span
                  onClick={() => onUnselectAnswer(index)}
                  className="inline-block px-3 py-1 bg-gray-200 text-black rounded-full cursor-pointer border"
                >
                  {selectedAnswers[index]}
                </span>
              ) : (
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full border">
                  _____________
                </span>
              )}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SentenceWithBlanks;

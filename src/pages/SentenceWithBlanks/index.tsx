import { SentenceWithBlanksProps } from "@/lib/interfaces";
import React from "react";

const BLANK_WIDTH = "w-34";

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
          <span className="inline my-1">{part.trim()}</span>
          {index < correctAnswerLength && (
            <>
              <span className="inline-block mx-1 align-middle">
                {selectedAnswers[index] ? (
                  <span
                    onClick={() => onUnselectAnswer(index)}
                    className={`inline-flex items-center justify-center px-3 py-1 my-2 bg-gray-200 text-black rounded-full cursor-pointer border ${BLANK_WIDTH} truncate overflow-hidden whitespace-nowrap`}
                    title={selectedAnswers[index]}
                  >
                    {selectedAnswers[index]}
                  </span>
                ) : (
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 my-2 bg-gray-100 rounded-full border ${BLANK_WIDTH}`}
                  >
                    _____________
                  </span>
                )}
              </span>
              <span> </span>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SentenceWithBlanks;

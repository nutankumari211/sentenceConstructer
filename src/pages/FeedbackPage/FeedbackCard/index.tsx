import React from "react";
import { CheckCircle, XCircle } from "lucide-react";
import { FeedbackCardProps } from "@/lib/interfaces";


const FeedbackCard: React.FC<FeedbackCardProps> = ({
  question,
  correctAnswer,
  userAnswer,
  isCorrect,
}) => {
  return (
    <div
      className={`rounded-lg p-5 border shadow-sm ${
        isCorrect ? "bg-green-50" : "bg-red-50"
      }`}
    >
      {/* Prompt */}
      <p className="text-sm text-gray-700 mb-4">
        {question.split("_____________").map((part, i) => (
          <span key={i}>
            {part}
            {i < correctAnswer.length && (
              <span className="font-semibold text-green-600">
                {correctAnswer[i]}
              </span>
            )}
          </span>
        ))}
      </p>

      {/* User Response Section */}
      <div>
        <div className="flex gap-2 items-center mb-1">
          <span className="text-sm text-gray-700 font-medium">Your response</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-semibold flex items-center gap-1 ${
              isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {isCorrect ? (
              <>
                <CheckCircle size={14} />
                Correct
              </>
            ) : (
              <>
                <XCircle size={14} />
                Incorrect
              </>
            )}
          </span>
        </div>

        {/* User's Sentence */}
        <p className="text-sm text-gray-900">
          {question.split("_____________").map((part, i) => (
            <span key={i}>
              {part}
              {i < userAnswer.length && (
                <span
                  className={`font-semibold ${
                    userAnswer[i] === correctAnswer[i]
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {userAnswer[i]}
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;

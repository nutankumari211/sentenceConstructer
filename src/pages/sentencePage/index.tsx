import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuitModal from "../QuitModal";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/utils/formatTime";
import ProgressBar from "@/pages/ProgressBar";
import SentenceWithBlanks from "@/pages/SentenceWithBlanks";
import OptionButtons from "@/pages/OptionButtons";
import { RootState } from "@/store/store";
import { setResults, setScreen } from "@/store/slices/appSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SentencePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state: RootState) => state.app.questions);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>([]);

  const [timeLeft, setTimeLeft] = useState(30);
  const [userResponses, setUserResponses] = useState<
    {
      userAnswer: string[];
      correctAnswer: string[];
      questionId: string;
      question: string;
    }[]
  >([]);

  


  useEffect(() => {
    if (questions?.length > 0) {
      setSelectedAnswers(Array(questions[0].correctAnswer.length).fill(null));
    }
  }, [questions]);
  
  const currentQuestion = questions?.[currentQuestionIndex];

  const handleNext = useCallback(() => {
    const currentResponse = {
      userAnswer: selectedAnswers.map((ans) => ans || ""),
      correctAnswer: currentQuestion.correctAnswer,
      questionId: currentQuestion.questionId,
      question: currentQuestion.question,
    };
    setUserResponses((prev) => [...prev, currentResponse]);

    if (currentQuestionIndex + 1 < questions?.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswers(
        Array(questions[currentQuestionIndex + 1]?.correctAnswer.length).fill(
          null
        )
      );
      setTimeLeft(30);
    } else {
      const results = [...userResponses, currentResponse].map((response) => ({
        ...response,
        isCorrect:
          JSON.stringify(response.correctAnswer) ===
          JSON.stringify(response.userAnswer),
      }));

      dispatch(setResults(results));
      setTimeout(() => {
        dispatch(setScreen("feedback"));
        navigate("/feedback");
      }, 100);
    }
  }, [
    selectedAnswers,
    currentQuestion,
    currentQuestionIndex,
    questions,
    userResponses,
    dispatch,
    navigate,
  ]);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    if (timeLeft === 0) handleNext();
    return () => clearInterval(timer);
  }, [timeLeft, handleNext]);

  const handleSelectAnswer = (answer: string) => {
    const firstEmptyIndex = selectedAnswers.findIndex((ans) => ans === null);
    if (firstEmptyIndex !== -1 && !selectedAnswers.includes(answer)) {
      const updated = [...selectedAnswers];
      updated[firstEmptyIndex] = answer;
      setSelectedAnswers(updated);
    }
  };

  const handleUnselectAnswer = (index: number) => {
    const updated = [...selectedAnswers];
    updated[index] = null;
    setSelectedAnswers(updated);
  };

  const handleQuitConfirm = () => {
    setShowQuitModal(false);
    dispatch(setScreen("landing"));
    navigate("/");
  };


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 w-full max-w-3xl relative">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-black font-semibold">
            {formatTime(timeLeft)}
          </span>
          <Button
            onClick={() => setShowQuitModal(true)}
            className="text-sm text-gray-600 border px-3 py-1 rounded-md hover:bg-gray-100 cursor-pointer"
          >
            Quit
          </Button>
        </div>

        <QuitModal
          isOpen={showQuitModal}
          onClose={() => setShowQuitModal(false)}
          onConfirm={handleQuitConfirm}
        />

        <ProgressBar
          total={questions?.length}
          currentIndex={currentQuestionIndex}
        />

        <p className="text-center text-gray-500 text-sm mb-6">
          Select the missing words in the correct order
        </p>

        <div className="text-center text-black leading-relaxed mb-6 h-[100px]">
          <SentenceWithBlanks
            question={currentQuestion?.question}
            correctAnswerLength={currentQuestion?.correctAnswer.length}
            selectedAnswers={selectedAnswers}
            onUnselectAnswer={handleUnselectAnswer}
          />
        </div>

       <div className="mt-2">
            <OptionButtons
              options={currentQuestion?.options}
              selectedAnswers={selectedAnswers}
              onSelect={handleSelectAnswer}
            />
          </div>
       

        <div className="flex justify-end">
          <Button
            disabled={!selectedAnswers.every((ans) => ans !== null)}
            onClick={handleNext}
            className={`rounded-md p-2 w-10  ${
              selectedAnswers.every((ans) => ans !== null)
                ? "bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SentencePage;

import React from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import CircularProgress from "@/lib/CircularProgress";
import FeedbackCard from "./FeedbackCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setScreen } from "@/store/slices/appSlice";

const FeedbackScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const results = useSelector((state: RootState) => state.app.results); 
  const totalBlanks = results.reduce(
    (total, result) => total + result.correctAnswer.length,
    0
  );
  const correctBlanks = results.reduce((correct, result) => {
    return (
      correct +
      result.correctAnswer.filter((word, i) => word === result.userAnswer[i])
        .length
    );
  }, 0);

  const scoreOutOfTen = Math.round((correctBlanks / totalBlanks) * 10);

  const handleBackToLanding = () => {
    dispatch(setScreen("landing"));
    navigate("/");
  };

  return (
    <div className="flex flex-col bg-gray-50 w-full justify-center items-center shadow-md rounded-lg pb-3">
      <Header
        title="Sentence Construction"
        onBack={() => console.log("Back button clicked")}
        onMenu={() => console.log("Menu button clicked")}
      />

      {/* Showing Progress */}
      <motion.div
        className="text-center mb-10 mt-4 justify-center items-center flex flex-col"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <CircularProgress percentage={scoreOutOfTen} />
        <p className="mt-4 text-lg font-medium max-w-xl text-gray-700">
          Review your responses below to see where you excelled and where you can improve!
        </p>
      </motion.div>

      <div className="mb-3 text-center">
        <Button
          onClick={handleBackToLanding}
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition cursor-pointer"
        >
          Back to Dashboard
        </Button>
      </div>

      {/* Feedback Cards */}
      <div className="w-full max-w-2xl space-y-6">
        {results.map((result) => (
          <FeedbackCard
            key={result.questionId}
            question={result.question}
            correctAnswer={result.correctAnswer}
            userAnswer={result.userAnswer}
            isCorrect={result.isCorrect}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackScreen;

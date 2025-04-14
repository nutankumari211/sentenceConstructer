import React from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC<{ onStartGame: () => void }> = ({ onStartGame }) => {
  const navigate = useNavigate();

  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const handleStartGame = () => {
    onStartGame();
    navigate("/game");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 w-full shadow-md rounded-lg">
      <Header
        title="Sentence Construction"
        onBack={() => console.log("Back button clicked")}
        onMenu={() => console.log("Menu button clicked")}
      />
      <div className="pt-3 items-center flex flex-col justify-center px-4 sm:px-6 md:px-10">
        <div className="mb-16 pt-10">
          <img
            src="src/assets/edit-property-512.png"
            alt="logo"
            className="h-20 w-20 mx-auto"
          />
        </div>

        <div className="text-5xl font-semibold text-gray-600 mb-2 text-center sm:text-4xl md:text-5xl">
          <motion.span
            variants={sentenceVariants}
            initial="hidden"
            animate="visible"
            className="inline-block underline decoration-black-200 decoration-4 text-black"
          >
            Sentence
          </motion.span>{" "}
          <span>Construction</span>
        </div>

        <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
          Users have to construct a sentence with random words by placing them in the correct order.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <div className="text-center flex-shrink-0">
            <p className="text-xl">Time Per Question</p>
            <p className="text-lg text-gray-500">30 seconds</p>
          </div>
          <div className="inline-block h-[100px] w-0.5 bg-gray-200 dark:bg-white/10"></div>
          <div className="text-center flex-shrink-0">
            <p className="text-xl">Total Questions</p>
            <p className="text-lg text-gray-500">10</p>
          </div>
          <div className="inline-block h-[100px] w-0.5 bg-gray-200 dark:bg-white/10"></div>
          <div className="text-center flex-shrink-0">
            <div className="flex justify-center items-center mb-2">
              <img
                src="src/assets/icons8-coin.gif"
                alt="coin"
                className="h-7 w-7"
              />
              <p className="text-xl">Coins</p>
            </div>
            <p className="text-lg text-gray-500">20 coins</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mt-8 justify-center">
          <Button className="px-7 py-6 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition cursor-pointer">
            Back
          </Button>

          <Button
            onClick={handleStartGame}
            className="px-7 py-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

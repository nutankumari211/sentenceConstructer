import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setScreen, setQuestions } from "@/store/slices/appSlice";
import LandingPage from "@/pages/LandingPage";
import SentencePage from "@/pages/sentencePage";
import FeedbackScreen from "@/pages/FeedbackPage";
import { RootState } from "@/store/store";

export const Routing = () => {
  const dispatch = useDispatch();
  const screen = useSelector((state: RootState) => state.app.screen);

  // Start Game API call and state management
  const startGame = async () => {
    try {
      const response = await fetch("http://localhost:3000/data");
      const data = await response.json();
      dispatch(setQuestions(data.questions));
      dispatch(setScreen("game"));
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <>
      <Route
        path="/"
        element={screen === "landing" ? <LandingPage onStartGame={startGame} /> : null}
      />
      <Route
        path="/game"
        element={screen === "game" ? <SentencePage /> : null}
      />
      <Route
        path="/feedback"
        element={screen === "feedback" ? <FeedbackScreen /> : null}
      />
    </>
  );
};

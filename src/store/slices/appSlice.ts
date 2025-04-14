import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question, Result } from "@/lib/interfaces";

interface AppState {
  screen: "landing" | "game" | "feedback";
  questions: Question[];
  results: Result[];
}

const initialState: AppState = {
  screen: "landing",
  questions: [],
  results: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setScreen(state, action: PayloadAction<AppState["screen"]>) {
      state.screen = action.payload;
    },
    setQuestions(state, action: PayloadAction<Question[]>) {
      state.questions = action.payload;
    },
    setResults(state, action: PayloadAction<Result[]>) {
      state.results = action.payload;
    },
  },
});

export const { setScreen, setQuestions, setResults } = appSlice.actions;
export default appSlice.reducer;

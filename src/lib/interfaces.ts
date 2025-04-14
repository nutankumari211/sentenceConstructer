export interface Question {
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string[];
}

export interface SentencePageProps {
  questions: Question[];
  onComplete: (
    results: {
      userAnswer: string[];
      correctAnswer: string[];
      questionId: string;
      question: string;
      isCorrect: boolean;
    }[]
  ) => void;
}

export interface SentenceWithBlanksProps {
    question: string;
    correctAnswerLength: number;
    selectedAnswers: (string | null)[];
    onUnselectAnswer: (index: number) => void;
  }

export interface Result {
  questionId: string;
  question: string;
  userAnswer: string[];
  correctAnswer: string[];
  isCorrect: boolean;
}

export interface QuitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export interface FeedbackCardProps {
  question: string;
  correctAnswer: string[];
  userAnswer: string[];
  isCorrect: boolean;
}

export interface FeedbackScreenProps {
  results: {
    questionId: string;
    question: string;
    userAnswer: string[];
    correctAnswer: string[];
    isCorrect: boolean;
  }[];
}

export interface HeaderProps {
  title: string;
  onBack?: () => void;
  onMenu?: () => void;
}

export interface LandingPageProps {
  onStart: () => void;
}

export interface OptionButtonsProps {
  options: string[];
  selectedAnswers: (string | null)[];
  onSelect: (answer: string) => void;
}

export interface ProgressBarProps {
    total: number;
    currentIndex: number;
  }

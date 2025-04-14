# Sentence Construction Game

A fun and interactive web application where users build grammatically correct sentences from jumbled words. Built with React, TypeScript, Framer Motion, and Redux Toolkit.

---

## Features

- Random sentence construction game
- Timer-based gameplay (30s/question)
- Score out of 10 shown in a circular progress chart
- Detailed feedback for each response
- Smooth animations via Framer Motion
- State management with Redux Toolkit
- Responsive UI using Tailwind CSS

---

## Folder Structure

src/
├── assets/              # Static images and icons
├── components/          # Reusable UI components (Button)
├── pages/               # Page-level components (LandingPage, FeedbackScreen, etc.)
├── store/               # Redux store and slices
├── lib/                 # Helper libraries
└── App.tsx              # Main application entry


---

## Tech Stack

- Frontend: React + TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- State Management: Redux Toolkit
- Routing: React Router

---

## Installation

```
# Clone the repository
git clone https://github.com/your-username/sentence-construction-game.git

# Navigate to the project directory
cd sentence-construction-game

# Install dependencies
npm install

# Start the app
npm run dev
```

#run json server parallely
json-server --watch src/lib/QNA.json --port 3000


---

## Game Flow

1. Landing Page: Overview of game rules and option to start.
2. Game Screen: Sentence construction with 30s timer.
3. Feedback Screen: Detailed score (out of 10) and review of each question.

---


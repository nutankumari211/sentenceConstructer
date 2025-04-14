# Deployment Link -> https://yoursentenceconstructor.netlify.app/

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

# run json server parallely
json-server --watch src/lib/QNA.json --port 3000
```




---

## Game Flow

# 1. Landing Page: 
-> The landing page serves as the entry point of the game.
-> It introduces the game concept (sentence construction), displays key information like time per question, total questions, and coins.
-> Users can start the game using the "Start" button, which navigates to the actual gameplay screen.

# 2. Sentence Page: 
-> This is the main gameplay page where users construct a sentence by selecting the correct words in the right order.
-> It features a timer, progress bar, and interactive UI to select/unselect words.
-> User responses are collected, evaluated for correctness, and stored in Redux to be shown later on the feedback screen.

# 3. Feedback Screen: 
-> This screen appears after the sentence construction game is completed.
-> It displays the user's score out of 10 based on correct blanks filled and provides a visual progress indicator using a circular progress component.
-> Each question is broken down with a FeedbackCard showing the user's answer, correct answer, and whether it was right or wrong.
-> Also includes a "Back to Dashboard" button to return to the landing screen


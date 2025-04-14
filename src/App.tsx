import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Routing } from "@/routes/routing";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {Routing()}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

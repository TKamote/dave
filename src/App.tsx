import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import InspectionForm from "./components/GenInspection/InspectionForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inspection/:templateType" element={<InspectionForm />} />
      </Routes>
    </Router>
  );
};

export default App;

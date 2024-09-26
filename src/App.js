import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Feed } from "./pages/Feed";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;

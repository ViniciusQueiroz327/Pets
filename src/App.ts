import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Feed } from "./pages/Feed";
import { Profile } from "./pages/Profile";
import { Search } from "./pages/Search";
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
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}
//teste
export default App;

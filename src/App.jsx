import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout.jsx";
import HomePage from "./pages/HomePage/homepage.jsx";
import FriendsPage from "./pages/FriendsPage/Friendspage.jsx";
import StudySession from "./pages/StudySession/StudySessions.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Pet from "./pages/Pet/Pet.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Layout wraps all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="studysession" element={<StudySession />} />
          <Route path="pet" element={<Pet />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;

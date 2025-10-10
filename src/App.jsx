import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/components/Layout.jsx";
import HomePage from "./pages/HomePage/homepage.jsx";
import FriendsPage from "./pages/FriendsPage/Friendspage.jsx";
import StudySession from "./pages/StudySession/StudySessions.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Pet from "./pages/Pet/Pet.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import Signup from "./pages/SingupPage/Signup.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        {/* Main layout with nested routes */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />
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

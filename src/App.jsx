import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/components/Layout.jsx";
import FriendsPage from "./pages/FriendsPage/Friendspage.jsx";
import StudySession from "./pages/StudySession/StudySessions.jsx";
import Pet from "./pages/Pet/Pet.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import Signup from "./pages/SingupPage/Signup.jsx";
import { StreakProvider } from "./context/StreakContext.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import RootRedirect from "./RootRedirect.jsx";
import PublicRoute from "./PublicRoute.jsx";

function App() {
  return (
    <StreakProvider>
      <Router>
        <Routes>
          {/* Root dynamically redirects based on token 
          (if token exist then go to studysession, else login) */}
          <Route path="/" element={<RootRedirect/>} />
          
          {/* Public Routes */}
          <Route path="/login" element={
            <PublicRoute> 
              <Login />
            </PublicRoute>
          } 
          />
          <Route path="/register" element={
            <PublicRoute>
            <Signup />
            </PublicRoute>
            } 
            />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
          >
            <Route path="friends" element={<FriendsPage />} />
            <Route path="studysession" element={<StudySession />} />
            <Route path="pet" element={<Pet />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
    </StreakProvider>
  );
}

export default App;

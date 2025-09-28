import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./pages/components/Layout.jsx";
import HomePage from "./pages/HomePage/homepage.jsx";
import FriendsPage from "./pages/FriendsPage/Friendspage.jsx";
import StudySession from "./pages/StudySession/StudySessions.jsx";
import Notifications from "./pages/Notifications/Notifications.jsx";
import Pet from "./pages/Pet/Pet.jsx";
import Profile from "./pages/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="home" /> }, // Redirect when on "/"
      { path: "home", element: <HomePage /> },
      { path: "StudySession", element: <StudySession /> },
      { path: "Friends", element: <FriendsPage /> },
      { path: "pet", element: <Pet /> },
      { path: "notifications", element: <Notifications /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

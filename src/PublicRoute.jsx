import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  const token = localStorage.getItem("accessToken"); // or "accessToken" if you stored it like that
  if (token) {
    // If logged in, redirect to study session
    return <Navigate to="/studysession" replace />;
  }

  // Otherwise, allow access to the public page
  return children;
}

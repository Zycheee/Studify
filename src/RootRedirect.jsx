import { Navigate } from "react-router-dom";

export default function RootRedirect() {
  const token = localStorage.getItem("accessToken"); // match the key you store
  if (token) {
    return <Navigate to="/studysession" replace />;
  } else {
    return <Navigate to="/login" replace />;
  }
}

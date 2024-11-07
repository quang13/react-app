import { createBrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import ProfilePage from "../pages/profile-page";
import Layout from "../layout";

export default function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Layout>
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    },
    {
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ]);
}

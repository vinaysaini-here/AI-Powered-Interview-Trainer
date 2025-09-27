import React from "react";
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import UserDashboard from "./pages/UserDashboard";
import UserHome from "./components/User/UserHome";
import UserPractice from "./components/User/UserPractice";
import UserQuestion from "./components/User/UserQuestion";
import UserCommunity from "./components/User/UserCommunity";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="user" element={<UserDashboard />}>
            <Route path="/user/home" element={<UserHome />} />
            <Route path="/user/practice" element={<UserPractice />} />
            <Route path="/user/question-bank" element={<UserQuestion />} />
            <Route path="/user/communtiy" element={<UserCommunity />} />
          </Route>
          <Route path="admin" element={<AdminDashboard />}>
            {/* <Route path="/admin/" element={<UserHome />} /> */}
            {/* <Route path="/admin/" element={<UserPractice />} /> */}
            {/* <Route path="/admin/" element={<UserQuestion />} /> */}
            {/* <Route path="/admin/" element={<UserCommunity />} /> */}
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<UserDashboard />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

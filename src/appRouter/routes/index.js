import {
  ForgotPassword,
  LandingPage,
  SignIn,
  SignUp,
  ResetPassword,
  NotFound,
} from "../../pages";

const authRoutes = [
  { name: "signUp", path: "/signup", element: <SignUp /> },
  { name: "signIn", path: "/signin", element: <SignIn /> },
  {
    name: "forgotPassword",
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    name: "resetPassword",
    path: "/reset-password",
    element: <ResetPassword />,
  },
  { name: "home", path: "/", element: <LandingPage /> },
  // { name: "default", path: "*", element: <NotFound /> },
];

const dashBoardRoutes = [
  { name: "AllCourses", path: "/dashboard", element: <div>all courses</div> },
  { name: "MyCourses", path: "/MyCourses", element: <div>My courses</div> },
  {
    name: "Badges",
    path: "/Badges",
    element: <div>Badges</div>,
  },
  { name: "MyContent", path: "/Content", element: <div>My Content</div> },
];
export { authRoutes, dashBoardRoutes };

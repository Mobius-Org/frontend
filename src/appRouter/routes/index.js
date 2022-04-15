import { ForgotPassword, LandingPage, SignIn, SignUp } from "../../pages";

const authRoutes = [
  { name: "signUp", path: "/signup", element: <SignUp /> },
  { name: "signIn", path: "/signin", element: <SignIn /> },
  {
    name: "forgotPassword",
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  { name: "home", path: "/", element: <LandingPage /> },
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

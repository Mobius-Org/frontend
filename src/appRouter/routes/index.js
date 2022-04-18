import {
  SignIn,
  NotFound,
  SetNewPassword,
  SignUp,
  ForgotPassword,
  LandingPage,
} from "../../pages";
import { Overview } from "../../pages/dashboard";
import AllCourses from "../../pages/dashboard/components/allcourses";

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
    element: <SetNewPassword />,
  },
  { name: "home", path: "/", element: <LandingPage /> },
];

const dashBoardRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <Overview />,
    displayName: "Welcome To Mobius !",
  },
  {
    name: "All Courses",
    path: "/dashboard/AllCourses",
    element: <AllCourses />,
    displayName: "Courses",
  },
  {
    name: "Badges",
    path: "/dashboard/Badges",
    element: <div>Badges</div>,
    displayName: "Bagdes",
  },
  {
    name: "My Contents",
    path: "/dashboard/Content",
    element: <div>My Content</div>,
    displayName: "Your Contents",
  },
];
export { authRoutes, dashBoardRoutes };

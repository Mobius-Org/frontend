import SignUp from "../../pages/signup/index";
import SignIn from "../../pages/signin/index";
import ForgotPassword from "../../pages/forgotPassword/index";
import SetNewPassword from "../../pages/setNewPassword/index";
import LandingPage from "../../pages/landingPage/index";
import AllCourses from "../../pages/dashboard/components/allcourses/index";
import Overview from "../../pages/dashboard/components/Overview/index";

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
  },
  {
    name: "All Courses",
    path: "/dashboard/AllCourses",
    element: <AllCourses />,
  },
  {
    name: "Badges",
    path: "/dashboard/Badges",
    element: <div>Badges</div>,
  },
  {
    name: "My Contents",
    path: "/dashboard/Content",
    element: <div>My Content</div>,
  },
];
export { authRoutes, dashBoardRoutes };

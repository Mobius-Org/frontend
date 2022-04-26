import {
  SignIn,
  SetNewPassword,
  SignUp,
  LandingPage,
  ForgotPassword,
  CourseDetails,
} from "../../pages";
import {
  Overview,
  AllCourses,
  MyContents,
  Badges,
} from "../../pages/dashboard";

const authRoutes = [
  { name: "signUp", path: "/signup", element: <SignUp /> },
  { name: "signIn", path: "/signin", element: <SignIn /> },
  {
    name: "forgotPassword",
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    name: "resetPassword",
    path: "/auth/reset-password/:token",
    element: <SetNewPassword />,
  },
  {
    name: "courseDetails",
    path: "/coursedetails/:id",
    element: <CourseDetails />,
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
    name: "My Courses",
    path: "/dashboard/AllCourses",
    element: <AllCourses />,
  },
  {
    name: "Badges",
    path: "/dashboard/Badges",
    element: <Badges />,
  },
  {
    name: "My Contents",
    path: "/dashboard/Content",
    element: <MyContents />,
  },
];
export { authRoutes, dashBoardRoutes };

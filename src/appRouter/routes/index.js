import {
  SignIn,
  SetNewPassword,
  SignUp,
  LandingPage,
  ForgotPassword,
  CourseDetails,
  Video,
  VerifyApp,
} from "../../pages";
import {
  Overview,
  AllCourses,
  MyContents,
  Badges,
} from "../../pages/dashboard";
import { RequireAuth } from "./RequireAuth";

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
  {
    name: "verifyPayment",
    path: "/courses/verify-payment/:status",
    element: <VerifyApp />,
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
    path: "/dashboard/myCourses",
    element: <AllCourses />,
  },

  {
    name: "View Course",
    path: "/dashboard/myCourses/viewCourse/:id",
    element: <Video />,
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
export { authRoutes, dashBoardRoutes, RequireAuth };

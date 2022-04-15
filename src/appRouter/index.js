import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLayout, DashBoardLayout } from "../layout";
import { authRoutes, dashBoardRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <Router>
      {/* Auth Routes */}
      <Routes>
        {authRoutes.map((route) => (
          <Route
            key={route.name}
            {...route}
            element={<AuthLayout>{route.element}</AuthLayout>}
          />
        ))}
      </Routes>
      {/* dashBaord Routes */}
      <Routes>
        {dashBoardRoutes.map((route) => (
          <Route
            key={route.name}
            {...route}
            element={<DashBoardLayout>{route.element}</DashBoardLayout>}
          />
        ))}
      </Routes>
    </Router>
  );
};

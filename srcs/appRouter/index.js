import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLayout, DashBoardLayout } from "../layout";
import { authRoutes, dashBoardRoutes } from "./routes";
import { AnimatePresence } from "framer-motion";

export const AppRouter = ({ showModal, setShowModal }) => {
  return (
    <Router>
      {/* Auth Routes */}
      <AnimatePresence exitBeforeEnter>
        <Routes>
          {authRoutes.map((route) => (
            <Route
              exact
              key={route.name}
              {...route}
              element={
                <AuthLayout showModal={showModal} SetShowModal={setShowModal}>
                  {route.element}
                </AuthLayout>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
      {/* dashBaord Routes */}
      <AnimatePresence exitBeforeEnter>
        <Routes>
          {dashBoardRoutes.map((route) => (
            <Route
              exact
              key={route.name}
              {...route}
              element={
                <DashBoardLayout
                  showModal={showModal}
                  SetShowModal={setShowModal}
                >
                  {route.element}
                </DashBoardLayout>
              }
            />
          ))}
        </Routes>
      </AnimatePresence>
      <Routes>
        {/* 404 */}
        {/* <Route path="*" exact element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

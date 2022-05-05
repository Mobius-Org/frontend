import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { colors } from "../../colors";
import {
  NavWrapper,
  Logo,
  Hamburger,
  Menu,
  MenuItem,
  LinkDropDown,
} from "./style";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { dashBoardRoutes } from "../../appRouter/routes";
import { logo } from "../../assets";
import { Button } from "../button";
import { Profile } from "../profile";
import { HashLink } from "react-router-hash-link";
import { handleLogout } from "../../store/action";
// create navigatio
const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { sign_in } = state.auth ? state.auth : null;
  const currentlocation = location.pathname;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const ActivePath = currentlocation.split("/")[2];
  document.addEventListener("scroll", function (e) {
    setScrollPosition(window.scrollY);
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    setIsOpen(!isOpen);
    setActive(e.target.textContent);
  };
  const dispatch = useDispatch();
  const scrollWithOffset = (el, offset) => {
    const elementPos = el.offsetTop - offset;
    window.scroll({
      top: elementPos,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollPosition > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollPosition]);
  useEffect(() => {
    const Links = document.querySelectorAll(".link");
    Links.forEach((link) => {
      if (link.textContent === active) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }, [active]);

  return (
    <NavWrapper scrolled={scrolled} id="topNav">
      <div>
        <Logo>
          <Link to="/">
            <img src={logo} alt="mobius_logo" />
          </Link>
        </Logo>
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <Menu isOpen={isOpen}>
          {currentlocation.includes("/dashboard") ? (
            <span>
              {dashBoardRoutes
                .filter(
                  (routeObject) =>
                    routeObject.name !== "View Course" &&
                    routeObject.name !== "Course Exercise"
                )
                .map(({ name, icon, path, displayName }, i) => {
                  return (
                    <MenuItem key={i}>
                      {" "}
                      <Link
                        onClick={handleClick}
                        className={
                          ActivePath === path.split("/")[2] ? "active" : null
                        }
                        to={path}
                      >
                        {name}
                      </Link>
                    </MenuItem>
                  );
                })}
            </span>
          ) : (
            <span>
              <MenuItem>
                {" "}
                <HashLink className="link" onClick={handleClick} to={"/"}>
                  Home
                </HashLink>
              </MenuItem>
              <MenuItem>
                {" "}
                <HashLink
                  className="link"
                  scroll={(el) => scrollWithOffset(el, 90)}
                  onClick={handleClick}
                  to="/#Courses"
                >
                  Our Courses
                </HashLink>
              </MenuItem>
              <MenuItem>
                {" "}
                <HashLink
                  className="link"
                  onClick={handleClick}
                  scroll={(el) => scrollWithOffset(el, 120)}
                  to={"/#Contact-us"}
                >
                  Contact us
                </HashLink>
              </MenuItem>
              <MenuItem className="drp">
                {" "}
                <Link
                  className="link"
                  onClick={(e) => {
                    e.target.parentElement.classList.toggle("active");
                    handleClick(e);
                  }}
                  to="#"
                >
                  Account {"  "} <FaChevronDown />
                </Link>
                <LinkDropDown
                  className="dropdown"
                  onClick={(e) => {
                    e.target.parentElement.parentElement.classList.remove(
                      "active"
                    );
                  }}
                >
                  {sign_in ? (
                    <>
                      <Link
                        to={"#"}
                        onClick={() => {
                          dispatch(handleLogout());
                        }}
                      >
                        LogOut
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to={"/signup"}>SignUp</Link>
                      <Link to={"/signin"}>SignIn</Link>
                    </>
                  )}
                </LinkDropDown>
              </MenuItem>
              <MenuItem className="small">
                <Link className="link" onClick={handleClick} to="/signup">
                  SignUp
                </Link>
              </MenuItem>
              <MenuItem className="small">
                <Link className="link" onClick={handleClick} to="/signin">
                  Sigin
                </Link>
              </MenuItem>
            </span>
          )}
          <MenuItem>
            {sign_in && currentlocation.includes("/dashboard") ? (
              <Profile />
            ) : (
              <span
                onClick={() => {
                  if (sign_in) {
                    navigate("/dashboard");
                  } else {
                    navigate("/signup");
                  }
                }}
              >
                {sign_in ? (
                  <Button
                    onClick={handleClick}
                    text={"Take Me to Dashboard"}
                    bgColor={colors.secondary80}
                  />
                ) : (
                  <Button
                    onClick={handleClick}
                    text={"Enroll Now"}
                    bgColor={colors.secondary80}
                  />
                )}
              </span>
            )}
          </MenuItem>
        </Menu>
      </div>
    </NavWrapper>
  );
};

export { Nav };

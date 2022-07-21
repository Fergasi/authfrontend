import React, { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { getUserToken, logoutUser } from "../Auth";

const NavBar = ({ isAuthLoading, setIsAuthLoading }) => {
  const [userToken, setUserToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = getUserToken();
    setUserToken(userToken);
  }, [isAuthLoading]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {!userToken && (
            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/registration'>Registration</Link>
              </li>
            </>
          )}
        </ul>
        <Outlet />
        {userToken && (
          <>
            <span>
              <strong>You Are Logged In</strong>
            </span>
            <br />
            <button
              onClick={async () => {
                setIsAuthLoading(true);
                const logoutSuccess = await logoutUser();
                if (logoutSuccess) {
                  setIsAuthLoading(false);
                  navigate("/");
                }
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavBar;

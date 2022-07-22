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
      <header>
        <nav>
          <ul>
            <li>
              <Link id='navItem' to='/'>
                Home
              </Link>
            </li>
            {!userToken && (
              <>
                <li>
                  <Link id='navItem' to='/login'>
                    Login
                  </Link>
                </li>
                <li>
                  <Link id='navItem' to='/registration'>
                    Registration
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
      {userToken && (
        <>
          <span>
            <strong>You Are Logged In</strong>
          </span>
          <br />
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
    </div>
  );
};

export default NavBar;

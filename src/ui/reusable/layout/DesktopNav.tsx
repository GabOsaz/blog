import React from "react";
import { useLogOutAuthenticate } from "@/application/authenticate";
import { userStorageAdapter } from "@/services/storageAdapter";

function DesktopNav({ children }) {
  const { logOutAuthenticate } = useLogOutAuthenticate();
  const storage = userStorageAdapter();
  const user = storage.user;

  const handleLogout = () => {
    logOutAuthenticate();
  };

  return (
    <div>
      <div>
        <div>
          <div className="logo">ICEBLOGS</div>
          <div>
            <ul>
              <li>Home</li>
              <li>Explore</li>
              {user && <li>My Articles</li>}
            </ul>
          </div>
        </div>
        <div>
          {user ? (
            <div>
              <span>Profile</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          ) : (
            <div>
              <span>
                <a href="login">SignIn</a>
              </span>
              |
              <span>
                <a href="register"></a>
              </span>
            </div>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default DesktopNav;

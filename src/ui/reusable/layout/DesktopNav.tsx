import React from "react";
import { useLogOutAuthenticate } from "@/application/authenticate";
import { userStorageAdapter } from "@/services/storageAdapter";
import styles from "./layout.module.css";
import Link from "next/link";

function DesktopNav({ children }) {
  const { logOutAuthenticate } = useLogOutAuthenticate();
  const storage = userStorageAdapter();
  const user = storage.user;

  const handleLogout = () => {
    logOutAuthenticate();
  };

  return (
    <>
      <div className={styles.desktopContainer}>
        <div className={styles.desktopNavbar}>
          <span className={styles.logo}>IceBlog</span>

          <div className={styles.navContain}>
            <Link href="/">Home</Link>
            <Link href="/">Explore</Link>
            {user && <Link href="/">My Articles</Link>}
          </div>

          <div className={styles.profileContain}>
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
      </div>
      <div>{children}</div>
    </>
  );
}

export default DesktopNav;

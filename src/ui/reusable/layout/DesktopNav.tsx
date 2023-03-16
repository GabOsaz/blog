import React from "react";
import { useLogOutAuthenticate } from "@/application/authenticate";
import { userStorageAdapter } from "@/services/storageAdapter";
import styles from "./layout.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";

function DesktopNav({ children }) {
  const { logOutAuthenticate } = useLogOutAuthenticate();
  const storage = userStorageAdapter();
  const user = storage.user;
  const { pathname } = useRouter();
  console.log(pathname);

  const handleLogout = () => {
    logOutAuthenticate();
  };

  return (
    <>
      <div className={styles.desktopContainer}>
        <div className={styles.desktopNavbar}>
          <span className={styles.logo}>IceBlog</span>

          <div className={styles.navContain}>
            <Link
              className={pathname === "/" ? styles.active : styles.navItem}
              href="/"
            >
              Home
            </Link>
            <Link
              className={
                pathname === "/explore" ? styles.active : styles.navItem
              }
              href="/"
            >
              Explore
            </Link>
            {user && (
              <Link
                className={
                  pathname === "/articles" ? styles.active : styles.navItem
                }
                href="/"
              >
                My Articles
              </Link>
            )}
          </div>

          <div className={styles.profileContain}>
            {user ? (
              <div>
                <Link
                  className={
                    pathname === "/profile" ? styles.active : styles.navItem
                  }
                  href="/profile"
                >
                  Profile
                </Link>
                <span onClick={handleLogout}>Logout</span>
              </div>
            ) : (
              <div>
                <span>
                  <Link className={styles.navItem} href="login">
                    SignIn
                  </Link>
                </span>
                |
                <span>
                  <Link className={styles.navItem} href="register">
                    Register
                  </Link>
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

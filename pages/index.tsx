import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { userStorageAdapter } from "src/services/storageAdapter";
import { useLogOutAuthenticate } from "src/application/authenticate";

export default function Home() {
  const storage = userStorageAdapter();
  const router = useRouter();
  const email = storage.user.email;

  const { logOutAuthenticate } = useLogOutAuthenticate();

  const handleLogout = () => {
    logOutAuthenticate();
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>IceBlogs v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {email !== "" ? (
          <div>
            Welcome aboard <b>{email}</b>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <div>
            Please create an account or <a href="/login">login</a> to your
            account.
          </div>
        )}
      </div>
    </div>
  );
}
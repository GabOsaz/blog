import { useState, useEffect } from "react";
import { useLoginAuthenticate } from "../../application/authenticate";
import styles from "./Auth.module.css";
import { useRouter } from "next/router";
import { userStorageAdapter } from "src/services/storageAdapter";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formStatus, setFormStatus] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const router = useRouter();

  const storage: UserStorageService = userStorageAdapter();

  const { user, loginAuthenticate } = useLoginAuthenticate();

  if (!!user) {
    router.push("/");
  }

  console.log(user);

  console.log(storage);

  function handleErrors() {
    if (email.length !== 0 && password.length !== 0) {
      setBtnDisabled(false);
    }
  }

  useEffect(() => {
    handleErrors();
  }, [email, password]);

  async function handleSubmit(e: React.FormEvent) {
    setFormStatus(true);
    e.preventDefault();

    if (email !== "" && password !== "") {
      await loginAuthenticate(email, password);
      setFormStatus(false);
    }

    setFormStatus(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>left content</div>

      <div className={styles.right}>
        <div className={styles.introText}>
          <span className={styles.loginText}>Login</span>
          <span className={styles.welcomeText}>Welcome back Chief!</span>
          <span className={styles.infoText}>
            We just need to confirm that this is really you👌
          </span>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className={styles.button}
            disabled={formStatus || btnDisabled}
          >
            {formStatus ? (
              <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

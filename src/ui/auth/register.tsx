import { useState, useEffect } from "react";
import { useSignupAuthenticate } from "src/application/authenticate";
import styles from "./Auth.module.css";
import { useRouter } from "next/router";

function RegisterComponent() {
  const router = useRouter();
  const { user, signupAuthenticate } = useSignupAuthenticate();
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formAction, setFormAction] = useState<boolean>(false);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

  async function handleSignup(e: React.FormEvent) {
    setFormAction(true);
    e.preventDefault();

    if (email != "" && password != "" && username != "") {
      await signupAuthenticate(email, username, password);
      setFormAction(false);
    }
    setFormAction(false);
  }

  function handleErrors() {
    if (email.length !== 0 && password.length !== 0) {
      setBtnDisabled(false);
    }
  }

  useEffect(() => {
    handleErrors();
  }, [email, password, username]);

  return (
    <div className={styles.container}>
      <div className={styles.left}></div>

      <div className={styles.right}>
        <div className={styles.introText}>
          <span className={styles.loginText}>Register</span>
          <span className={styles.welcomeText}>Welcome to IceBlogs</span>
          <span className={styles.infoText}>
            We only need some information from you👌
          </span>
        </div>

        <form onSubmit={handleSignup} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Select a cool username"
            />
          </div>

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="select a password"
            />
          </div>

          <button className={styles.button} disabled={true}>
            {formAction ? (
              <i className="fas fa-circle-notch fa-spin" aria-hidden="true"></i>
            ) : (
              "Register"
            )}
          </button>

          <div className={styles.actionText}>
            <span>
              Already own an account? <a href="/login">Login</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterComponent;

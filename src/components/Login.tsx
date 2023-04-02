import styles from "../styles/index.module.scss";

const Login = ({ handleLogin }: { handleLogin: (event: React.FormEvent<HTMLFormElement>) => void }) => {
    return (
    <div className={styles.loginContainer}>
          <h2>Login</h2>
          <form className={styles.form} onSubmit={handleLogin} method="post" action="/">
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="username">Username</label>
              <input className={styles.input} type="text" id="username" name="username" />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}  htmlFor="password">Password</label>
              <input className={styles.input} type="password" id="password" name="password" />
            </div>
            <button className={styles.loginButton} type="submit">Sign in</button>
          </form>
        </div>
    )
}

export default Login
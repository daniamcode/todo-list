const Login = ({ handleLogin }: { handleLogin: (event: React.FormEvent<HTMLFormElement>) => void }) => {
    return (
    <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin} method="post" action="/">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Sign in</button>
          </form>
        </div>
    )
}

export default Login
import React, { useState } from 'react'
import styles from './login.module.css'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={styles.container}>
      <div className={{ width: 200 }}>
        <h1>Login Page</h1>

        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor='email'>Username</label>
              <input
                type='text'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={styles.loginFormItem}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button>login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

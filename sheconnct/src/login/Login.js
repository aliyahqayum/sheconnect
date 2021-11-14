import { ReactComponent as Logo } from '../Logo.svg';
import './Login.css';

function Login() {
  return (
    <div className = "loginWrapper">
    <div className = "loginBox">
      <Logo/>

       <div className = "text">
       <h1>Welcome Back</h1>
       <h2>Insert Motto Here</h2>
       </div>

        <div className = "textboxWrapper">
        <input/>
        <input/>
        
        </div>

        <div className = "buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>


        </div>
    </div>

    
  );
}

export default Login;
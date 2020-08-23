import React from "react";
import loginImg from "../../assets/img/login.svg";
import "../../login.css";


<<<<<<< HEAD:src/Components/Login.js
export class Login extends React.Component {
    constructor(props) {
        super(props);
        
    }
=======
const Login =() =>  {
>>>>>>> e78bd1223081d58694aae6d22ec9972c5f694834:src/Components/Landing Page/Login.js
    
     return (    
       <React.Fragment>
        <div className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt={""} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
      </React.Fragment>
        )
        
}
export default Login;
    



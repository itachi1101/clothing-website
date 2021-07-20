import React from 'react';
import   './sign-in-and-sign-out.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sing-up/sing-up.componenet';
const SignInAndSignUpPage=()=>(
    <div className="sign-in-and-sign-out">
      <SignIn/>
      <SignUp/>
    </div>
);
export default SignInAndSignUpPage;
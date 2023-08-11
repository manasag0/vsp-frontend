import Leftside from '../Components/leftside';
import Right from '../Components/Right';
import Nav from '../Components/Nav';

const Login = () =>{
    const data = {
        title: 'Sign in',
        desc: 'Sign in to continue access pages'
    }
    return(
        <>
        <Nav />
        <div className="login">
            <Leftside text="Register" />
            <Right {...data} />
        </div>
        </>
    )
}

export default Login;
import Leftside  from '../Components/Leftside';
import Right from '../Components/Right';
import NavBar from  '../Components/NavBar'

const Login = () =>{
    const data = {
        title: 'Sign in',
        desc: 'Sign in to continue access pages'
    }
    return(
        <>
        <NavBar />
        <div className="login">
            <Leftside text="Register" />
            <Right {...data} />
        </div>
        </>
    )
}

export default Login;
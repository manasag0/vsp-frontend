import Leftside from '../Components/leftside';
import Right from '../Components/Right';
import Nav from '../Components/Nav';

const Register = () =>{
    const data = {
        title: 'Register',
        desc: 'Register to continue access pages',
        
    }
    return(
        <>
            <Nav />
            <div className="register">
                <Leftside text="Sign In" />
                <Right {...data} />
            </div>
        </>
    )
}

export default Register;
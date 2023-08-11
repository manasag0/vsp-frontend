import {useNavigate} from 'react-router-dom';

const Left = ({text}) =>{
    const navigate = useNavigate();
    return(
        <div className="left">
            <h1 className="left__title">Tuner</h1>
            <p className="left__desc">
                <span>Enjoy Multiple videos</span> 
                <span>at one place</span>
            </p>
            <p className="left__register" onClick={() => navigate(text === 'Register' ? '/register' : '/login')}>{text}</p>
        </div>
    )
}

export default Left;
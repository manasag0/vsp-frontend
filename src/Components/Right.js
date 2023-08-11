import {useState} from 'react';
import data from '../formFields.js';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    phone: '',
    profession: '',
    pwd: '',
    confirmpwd: ''
}

const Input = ({onChange, type, name, value, placeholder}) =>{
    return(
        <input onChange={onChange} type={type} name={name} placeholder={placeholder} />
    )
}


const Right = ({title, desc}) =>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);
    const handleOnChange = event =>{
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const onSubmitHandle = async event =>{
        event.preventDefault();
        try{
            const res = await axios.post(`https://vsp-apionrender.com/api/auth/${title === 'Sign in' ? 'login' : 'register'}`, formData);
            if(title === 'Sign in'){
                localStorage.setItem('username', res.data.username);
                alert('Login successfully completed');
                navigate('/');
            }else{
                alert('User registration successfully completed');
                navigate('/login');                
            }
        }catch(error){
            console.error(error);
        }
    }
    return(
        <div className="right">
            <h2 className="right__title">{title}</h2>
            <p className="right__desc">{desc}</p>
            <form method="post" className="form" onSubmit={onSubmitHandle}>
                {
                    title === 'Sign in' ?
                    data.filter(obj => obj.name === 'email' || obj.name === 'pwd').map(d => <Input key={d.name} onChange={handleOnChange} {...d} />) :
                    data.map(d => <Input key={d.name} {...d} onChange={handleOnChange} />)
                }
                <div className="btn">
                    <button type="submit">{title}</button>
                </div>
            </form>
        </div>
    )
}

export default Right;
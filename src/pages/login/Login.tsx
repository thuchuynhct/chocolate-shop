import { FormEvent } from 'react';
import { useData } from '../../context/AppContext';
import './Login.scss';

const Login = () => {
    const { setLogin } = useData();
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLogin(true);
    }
    return (
        <div className='login'>
            <form onSubmit={onSubmit} className="login-form">
                <h1>Login</h1>
                <span>Tên đăng nhập</span>
                <input type="text" defaultValue="admin" placeholder='Tên đăng nhập...' />
                <span>Mật khẩu</span>
                <input type="password" defaultValue="admin" placeholder='Mật khẩu' />
                <button className='btn-black' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;
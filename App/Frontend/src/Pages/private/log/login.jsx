import React, { createRef } from 'react';
import LoginAdmin from './models/LoginAdmin';
import { postLogin } from './services/postLogin';
import useFormRespuesta from './hook/useFormRespuesta';

const refEmail = createRef(''),
    refPassword = createRef('');

const Login = () => {
    const [setAdmin] = useFormRespuesta();
    const handlerSubmit = (event) => {
        event.preventDefault();
        const email = refEmail.current.value,
            password = refPassword.current.value;
        const admin = new LoginAdmin(email, password)
        const data = JSON.stringify(admin);
        const respon = postLogin(data);
        respon.then((res) => setAdmin(res));

    };

    return (
        <div>
            <header>
                <h1>Iniciar Sesion</h1>
            </header>
            <form onSubmit={handlerSubmit}>
                <label>Email:</label>
                <input ref={refEmail} type="email" required />
                <label>Password:</label>
                <input ref={refPassword} type="password" required />
                <input type="submit" />
            </form>

        </div>
    );
}

export default Login;

import React, { createRef, useRef } from 'react';
import LoginAdmin from './models/LoginAdmin';

const refEmail = createRef(''),
    refPassword = createRef('');

const Login = () => {
    const handlerSubmit = (event) => {
        event.preventDefault();
        const email = refEmail.current.value,
            password = refPassword.current.value;
        const admin = new LoginAdmin(email, password)
        const data = JSON.stringify(admin);
        console.log(data);
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

import React from 'react';

const Login = () => {
    const handlerSubmit = (event) => {
        event.preventeDefault();
    };
    return (
        <div>
            <header>
                <h1>Iniciar Sesion</h1>
            </header>
            <form onSubmit={handlerSubmit}>
                <label>Email:</label>
                <input type="email" required />
                <label>Password:</label>
                <input type="password" required />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Login;

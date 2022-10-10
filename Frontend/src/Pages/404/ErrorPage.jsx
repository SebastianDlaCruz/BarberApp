import React from 'react';
import { useRouteError } from 'react-router-dom';
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Error 404</h1>
            <p>La direccion  a la que usted desea ingresar no se encuentra en esta pagina web</p>
            <i>{error.message || error.statusText}</i>
        </div>
    );
}

export default ErrorPage;

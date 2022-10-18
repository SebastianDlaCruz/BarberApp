import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LabesInput from '../../../components/LabesInput';
import { UserContext } from '../../../context/userContext';
import { Title } from '../../../style-components';
import { getAccess } from './intercepts/getAccess';
import LoginModel from './models/Login.models';
import { ContainerForm, Form, Submit } from './style-components/layout/LoginStyles'

const Login = () => {

    const refEmail = useRef(''),
        refPassword = useRef('');
    const navigate = useNavigate();

    const { setAccess } = useContext(UserContext);

    const handlerSubmit = (event) => {
        event.preventDefault();
        const date = new LoginModel(refEmail.current.value, refPassword.current.value);
        getAccess(date).then(res => {
            setAccess(res.access);
            if (res.access) navigate('/private/dashboard');
        });
    }

    return (
        <ContainerForm>
            <Form onSubmit={handlerSubmit}>
                <header>
                    <Title fontSize={2} >Ingresa Al Dashboard</Title>
                </header>
                <LabesInput
                    type={"email"}
                    htmlFor={"email"}
                    textLabel={"Ingrese Email"}
                    refInput={refEmail}
                />
                <LabesInput
                    type={"password"}
                    htmlFor={"password"}
                    textLabel={"Ingrese Contraseña"}
                    refInput={refPassword}
                />
                <Submit type="submit" value={"Acceder"} />
            </Form>

        </ContainerForm>
    );
}

export default Login;

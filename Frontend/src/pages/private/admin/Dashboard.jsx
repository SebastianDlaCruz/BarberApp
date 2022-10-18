import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/userContext';

const Dashboard = () => {

    const { access } = useContext(UserContext);
    console.log(access)
    const navigate = useNavigate();

    useEffect(() => {

        if (!access) navigate('/private/login');

    }, []);
    return (
        <>
            <h1>Bienvenido al Dashboard</h1>
        </>
    );
}

export default Dashboard;

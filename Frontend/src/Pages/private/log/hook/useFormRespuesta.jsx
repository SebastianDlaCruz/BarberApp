import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const useFormRespuesta = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        if (admin) navigate('/admin');
    }, [admin]);

    return [setAdmin];
}

export default useFormRespuesta;

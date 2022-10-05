import React, { useState, useEffect } from 'react';

const useFormRespuesta = (LoginAdmin) => {

    const [admin, setAdmin] = useState(LoginAdmin);

    useEffect(() => {
        console.log(state)
    }, [admin]);

    return true;
}

export default useFormRespuesta;

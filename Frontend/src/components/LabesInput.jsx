import { useState } from 'react';
import { Label } from '../style-components';


const LabesInput = ({ type, htmlFor, textLabel, refInput }) => {

    const [trans, settrans] = useState(false);


    const handleTransition = (event) => {
        if (event.target.value == '') settrans(true);
    }


    const handleNotTransition = (event) => {

        if (event.target.value == '') settrans(false);
    }


    return (
        <>
            <Label
                htmlFor={htmlFor}
                trans={trans}
                marginLeft={4}
            >{textLabel}</Label>
            <input type={type}
                onFocus={handleTransition}
                onBlur={handleNotTransition}
                required
                ref={refInput}
            />
        </>
    );
}

export default LabesInput;

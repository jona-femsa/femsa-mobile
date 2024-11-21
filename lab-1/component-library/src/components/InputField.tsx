import { useState } from "react";

type InputValue = string | number;

interface InputFieldProps {
    value: InputValue;
    placeholder?: string;
};

export default function InputField({value, placeholder = 'Ingresa datos'}: InputFieldProps ): JSX.Element {
    const [error, setError] = useState<boolean>(false);
    const [type, setType] = useState<string>('');

    // guard para validar el tipo de dato a mostrar
    function isInputValue(data: InputValue): data is InputValue {
        return typeof data === 'string' || typeof data === 'number';
    }

    // manejo de error
    if( isInputValue(value) ) {
        setError(false);

        if(typeof value === 'number') {
            setType('number');
        } else {
            setType('text');
        }

    } else {
        setError(true);
    }


    return (
        <div>
            <input type={ type } value={ value } style={{ borderColor: error ? 'red' : 'black'} } />
            { /* Feedback del error */ }
            { error && <span style={{ color: 'red'}}>Error de tipo</span>}
        </div>
    );
}
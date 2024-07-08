import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [formValuesState, setFormValuesState] = useState(initialState);

    const reset = (initialState) => {
        setFormValuesState(initialState);
    }

    const handleInputChange =  ({ target }, type='input') => {   // Se extrae el target del event

        switch (type) {
            case 'input':   // Entrada general de textos, cuyo valor está en target.value
                setFormValuesState({
                    ...formValuesState,
                    [target.name]: target.value   // Se establece el name del input con el valor que se escribe
                                                  // en el input requerido
                });
                break;
            case 'checkbox':
                setFormValuesState({
                    ...formValuesState,
                    [target.name]: target.checked
                });
                break;
            case 'file':
                setFormValuesState({
                    ...formValuesState,
                    [target.name]: target.files[0]
                });
                break;

            default:
                break;
        }

    }

    return [formValuesState, handleInputChange, reset];

}

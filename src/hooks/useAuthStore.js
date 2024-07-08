import { useDispatch, useSelector } from 'react-redux';

import { innovaTubeApi } from '../api';
import {
    onAuthLogin,
    onAuthLogout,
    onChecking,
    onAuthRegister,
    clearErrorMessage,
} from '../store/slices/auth';


export const useAuthStore = () => {

    const { status, user, errorMessage, msg } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking());

        try {

            const { data } = await innovaTubeApi.post('auth/login', { email, password });

            const { token, user: userLogin } = data;

            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date().getTime());  // Para checar si el token está por expirar

            dispatch(onAuthLogin(userLogin));

        } catch (error) {
            
            // Atrapa el primer error en un string
            let msg = error.response.data.errors ? error.response.data.errors[0].msg
                : error.response.data.msg;

            if (!msg) msg = '';

            dispatch(onAuthLogout(msg));

        }

    }

    const startRegister = async ({
        firstName,
        lastName,
        email,
        password,
        rPassword,
        termsAndConditions
    }) => {

        dispatch(onChecking());

        try {

            if (password !== rPassword) throw { response: { data: { msg: 'La contraseña debe ser la misma' } } };
            if (termsAndConditions === false) throw { response: { data: { msg: 'Debe aceptar términos y condiciones' } } };

            const { data } = await innovaTubeApi.post('user/create', {
                firstName,
                lastName,
                email,
                password,
                termsAndConditions
            });
            const { user: userRegister, msg } = data;

            dispatch(onAuthRegister({ msg }));
            dispatch(clearErrorMessage());

            return true;

        } catch (error) {

            console.log(error.response.data.errors ? 2 : 3);
            console.log(error);


            const msg = error.response.data.errors ? error.response.data.errors[0].msg
                : error.response.data.msg;

            dispatch(onAuthLogout(msg));

            return false;

        }

    }

    const startLogout = () => {

        localStorage.clear();
        dispatch(onAuthLogout());

    }

    const checkAuthToken = async () => {

        try {

            const { data } = await innovaTubeApi.get('auth/renew');

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onAuthLogin(data.user));

        } catch (error) {
            localStorage.clear();
            const msg = error.response.data.msg.errors ? error.response.data.msg.errors[0].msg
                : error.response.data.msg;

            dispatch(onAuthLogout(msg));
        }

    }

    return {
        // Propiedades
        status,
        user,
        errorMessage,
        msg,

        // Métodos
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }

}

import axios from 'axios';

const innovaTubeApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_BACKEND,

});

// Interceptor tipo request ya que debe hacerse antes de que se haga la solicitud
innovaTubeApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    
    return config;
    
});

export default innovaTubeApi;
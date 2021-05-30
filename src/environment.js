let env = process.env.REACT_PUBLIC_ENV;

if (!env) env = 'dev';

const environments = {
    'development': {
        serverUrl: 'http://localhost:8080'
    },
    'production': {
        serverUrl: 'https://my-app-server.herokuapp.com'
    }
}

export const environment = environments[env];
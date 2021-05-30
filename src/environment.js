let env = process.env.REACT_APP_ENV;

if (!env) env = 'development';

const environments = {
    'development': {
        serverUrl: 'http://localhost:8080'
    },
    'production': {
        serverUrl: 'https://my-app-server.herokuapp.com'
    }
}

export const environment = environments[env];
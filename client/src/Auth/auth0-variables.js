export const AUTH_CONFIG = {
    domain: 'bopmob.auth0.com',
    clientId: document.location.href.includes('localhost')
        ? '9oml7B0FaExJMXgBR7a5UL5zxN6L2dCa'
        : 'Is3BzjejMHvlGihJi4wjXtKCVY4bHxm5',
    callbackUrl: document.location.href.includes('localhost')
        ? 'http://localhost:3000/my_profile'
        : 'http://thereallabz.now.sh/my_profile'
};

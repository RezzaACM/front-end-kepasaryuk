const token = JSON.parse(localStorage.getItem('access_token'));

export function authHeader() {
    if (token) {
        return { 'auth-token': token }
    } else {
        return {}
    }
}
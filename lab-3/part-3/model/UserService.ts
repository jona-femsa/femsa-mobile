export default class UserService {
    login(username: string, password: string) {
        return (username === 'admin' && password === 'admin');
    }
}

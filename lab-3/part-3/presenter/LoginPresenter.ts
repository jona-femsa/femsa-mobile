import UserService from "../model/UserService";
import LoginView from "../view/LoginView";

export default class LoginPresenter {
    constructor(private view: LoginView, private service: UserService) {}

    onLogin(username: string, password: string): void {
        this.view.loading();

        const isAuthenticated = this.service.login(username, password);
        this.view.hideLoading();

        if(isAuthenticated) {
            this.view.success('Auth!');
        } else {
            this.view.error('No auth');
        }
    }
}
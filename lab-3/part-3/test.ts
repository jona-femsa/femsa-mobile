import UserService from "./model/UserService";
import LoginPresenter from "./presenter/LoginPresenter";
import LoginScreen from "./view/LoginScreen";

const screen = new LoginScreen();
const service = new UserService();
const presenter = new LoginPresenter(screen, service);

presenter.onLogin('admin', 'pass');
console.log("------------");
presenter.onLogin('admin', 'admin');

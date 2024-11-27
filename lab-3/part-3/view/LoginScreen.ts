import LoginView from "./LoginView";

export default class LoginScreen implements LoginView {
    error(text: string): void {
        console.error('ERROR', { text });
    }

    success(text: string): void {
        console.info(text);
    }

    loading(): void {
        console.info('Loading...');
    }
    
    hideLoading(): void {
        console.info('Loading complete');
    }
}

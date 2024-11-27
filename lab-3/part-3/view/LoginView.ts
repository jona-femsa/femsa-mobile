export default interface LoginView {
    loading(): void;
    hideLoading(): void;
    error(text: string): void;
    success(text: string): void;
}
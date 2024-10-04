export interface IButton {
    title: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void; //? significa que é opcional
}
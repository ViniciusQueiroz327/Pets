import { Control } from 'react-hook-form';

export interface IInput<T extends Record<string, any> = any>  {
    icon: React.ReactNode;
    control: Control<T>;
    name: string;
    defaultValue?: string;
    errorMessage?: string;
    [key: string]: any;
}

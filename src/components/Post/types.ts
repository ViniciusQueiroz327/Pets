export interface IPost {
    user: string;
    name: string;
    imageUrl: string;
    likes: string; //verificar como irá fazer a lógica para os likes -> 1000 = 10K -> de number para string
    comments: number;
    shares: number;
    caption: string;
}
export interface IProduct {
    title: string;
    description: string;
    photo: string;
    price: number;
    stock: number;
}

export class Product implements IProduct {

    constructor(
        public title: string,
        public description: string,
        public photo: string,
        public price: number,
        public stock: number
    ) {}

}

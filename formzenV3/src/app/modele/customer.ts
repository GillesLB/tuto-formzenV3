export interface ICustomer {
    name: string;
    address: string;
    creditCard: string;
}

export class Customer implements ICustomer {

    constructor(
        public name: string,
        public address: string,
        public creditCard: string
    ) {}

}

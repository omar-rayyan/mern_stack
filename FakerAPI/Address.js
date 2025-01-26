import { faker } from '@faker-js/faker';

export class Address{
    constructor(){
        this.street = faker.location.streetAddress();
        this.city = faker.location.city();
        this.state = faker.location.state();
        this.zipCode = faker.location.zipCode();
        this.country = faker.location.country();
    }
}
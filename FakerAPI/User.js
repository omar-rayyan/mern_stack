import { faker } from '@faker-js/faker';

export class User{
    constructor(){
        this._id = faker.string.uuid;
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.phoneNumber = faker.phone.number();
    }
}
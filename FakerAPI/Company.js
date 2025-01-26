import { faker } from '@faker-js/faker';
import { Address } from './Address.js';

export class Company{
    constructor(){
        this._id = faker.string.uuid;
        this.name = faker.company.name();
        this.address = new Address();
    }
}
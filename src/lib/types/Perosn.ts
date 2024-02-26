import { faker } from "@faker-js/faker"

export interface Person {
    name: string,
    bio: string,
    age: number,
    // imageUrl: string;
}

export function createPerson(): Person {
    return {
        name: faker.person.fullName(),
        bio: faker.person.bio(),
        age: faker.number.int(100),
        // imageUrl: faker.image.url({ width: 190, height: 190 })
    };
}
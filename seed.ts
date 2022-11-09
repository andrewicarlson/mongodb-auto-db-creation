import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

(async () => {
    const prisma = new PrismaClient();
    const count = 1;

    for (let i = 0; i <= count; i++) {
        const x = await prisma.component.create({
            data: {
                alias: faker.datatype.string(),
                archived: faker.datatype.boolean(),
                category: faker.datatype.string(),
                created: faker.datatype.number(),
                name: faker.datatype.string(),
                revision: faker.datatype.string(),
                status: faker.datatype.string(),
                companyObj: {
                    create: {
                        archived: faker.datatype.boolean(),
                        created: faker.datatype.number(),
                        name: faker.datatype.string()
                    }
                },
                libraryObj: {
                    create: {
                        archived: faker.datatype.boolean(),
                        created: faker.datatype.number(),
                        name: faker.datatype.string(),
                        type: "GENERAL"
                    }
                }
            }
        });
    }

    await prisma.$disconnect();
})();
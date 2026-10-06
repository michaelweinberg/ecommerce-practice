import "dotenv/config";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'



const pool = new Pool({
        connectionString: process.env.DATABASE_URL!,
        ssl: {
            rejectUnauthorized: false,
        }
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({adapter}).$extends({
    result: {
        product: {
            price: {
                compute(product) {
                    return product.price.toString();
                }
            },
            rating: {
                compute(product) {
                    return product.rating.toString();
                }
            }
        }
    }
})
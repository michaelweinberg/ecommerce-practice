import "dotenv/config";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
        connectionString: process.env.DATABASE_URL!,
    });

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
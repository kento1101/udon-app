import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class ItemsService {
    private prisma = new PrismaClient();

    async getRandomItem() {
        const count = await this.prisma.item.count();
        const randomIndex = Math.floor(Math.random() * count);

        const randomItem = await this.prisma.item.findMany({
            take: 1,
            skip: randomIndex,
        });

        return randomItem[0]; 
    }

    // 全てのアイテムを取得するメソッド
    async getAllItems() {
        return await this.prisma.item.findMany();
    }
}

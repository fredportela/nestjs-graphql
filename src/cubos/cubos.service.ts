import { Injectable } from '@nestjs/common';
import { Cubo } from '@prisma/client';
import { NewCubo } from 'src/graphql.schema';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CubosService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: string): Promise<Cubo | null> {
    return this.prisma.cubo.findUnique({
      where: {
        id,
      },
    });
  }

  async calcularVolume(cubo: Cubo): Promise<number | null> {
    let volume = null;
    if(cubo) {
      volume = cubo.altura * cubo.largura * cubo.comprimento;
    }
    return volume;
  }

  async findAll(): Promise<Cubo[]> {
    return this.prisma.cubo.findMany({});
  }

  async create(input: NewCubo): Promise<Cubo> {
    return this.prisma.cubo.create({
      data: input,
    });
  }

}

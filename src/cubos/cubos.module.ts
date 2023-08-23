import { Module } from '@nestjs/common';
import { CubosResolvers } from './cubos.resolvers';
import { CubosService } from './cubos.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [CubosResolvers, CubosService],
  imports: [PrismaModule],
})
export class CubosModule {}

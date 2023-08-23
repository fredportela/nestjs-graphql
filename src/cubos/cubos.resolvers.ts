import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CubosService } from './cubos.service';
import { Cubo, NewCubo } from 'src/graphql.schema';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('Cubo')
export class CubosResolvers {
  constructor(private readonly cuboService: CubosService) {}

  @Query('cubo')
  async cubo(@Args('id') id: string): Promise<Cubo> {
    return this.cuboService.findOne(id);
  }

  @Query('volume')
  async volume(@Args('id') id: string): Promise<number> {
    const cubo = await this.cuboService.findOne(id);
    return await this.cuboService.calcularVolume(cubo);
  }

  @Mutation('cadastrarCubo')
  async create(
    @Args('altura') altura: number,
    @Args('largura') largura: number,
    @Args('comprimento') comprimento: number
    ): Promise<Cubo> {
    const newCubo = new NewCubo();
    newCubo.altura = altura;
    newCubo.largura = largura;
    newCubo.comprimento = comprimento;
    const createdCubo = await this.cuboService.create(newCubo);
    pubSub.publish('cuboCreated', { cuboCreated: createdCubo });
    return createdCubo;
  }

}

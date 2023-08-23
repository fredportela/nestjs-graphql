import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../src/prisma/prisma.service'; // Supondo que você tenha um serviço Prisma configurado
import { CubosService } from '../src/cubos/cubos.service';

describe('CubosService', () => {
  let cubosService: CubosService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CubosService,
        {
          provide: PrismaService,
          useValue: {
            cubo: {
              findMany: jest.fn(),
              create: jest.fn(),
              findUnique: jest.fn(),
              // Adicione outras funções Prisma que você usa aqui com implementações fictícias
            },
            // Adicione outras entidades Prisma que você usa aqui com implementações fictícias
          },
        },
      ],
    }).compile();

    cubosService = module.get<CubosService>(CubosService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(cubosService).toBeDefined();
  });

  describe('volumeCubo', () => {
    it('should calculate the volume of the cube', async () => {
      const mockCubo = { id: '1', altura: 25.5, largura: 32.8, comprimento: 46.1 };
      
      const volume = await cubosService.calcularVolume(mockCubo);

      expect(volume).toEqual(38558.04);
    });
  });

  describe('volumeCuboNotEqual', () => {
    it('should calculate the volume of the cube not equal', async () => {
      const mockCubo = { id: '1', altura: 25.5, largura: 32.8, comprimento: 46.1 };
      
      const volume = await cubosService.calcularVolume(mockCubo);

      expect(volume).not.toEqual(25319.14);
    });
  });

});

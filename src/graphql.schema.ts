
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewCubo {
    altura: number;
    largura: number;
    comprimento: number;
}

export class Cubo {
    id: string;
    altura: number;
    largura: number;
    comprimento: number;
}

export abstract class IQuery {
    abstract cubo(id: string): Cubo | Promise<Cubo>;

    abstract volume(id: string): number | Promise<number>;
}

export abstract class IMutation {
    abstract cadastrarCubo(altura: number, largura: number, comprimento: number): Cubo | Promise<Cubo>;
}

type Nullable<T> = T | null;

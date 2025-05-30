import { Type } from "arktype";

export type Endpoints = { [key: string]: { schema: Type, arguments: Type<[...unknown[]]>, optional?: boolean } }

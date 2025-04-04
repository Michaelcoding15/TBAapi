import { z } from "zod";

export type Endpoints = { [key: string]: { schema: z.Schema, arguments: z.Schema | null } }

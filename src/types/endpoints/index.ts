import { teamEndpoints } from "./teams.js";
import { statusEndpoints } from "./status.js";
import type { Endpoints } from "../index.js";

export const endpoints = {
    ...teamEndpoints,
    ...statusEndpoints
} satisfies Endpoints;

export type TBAEndpoints = typeof endpoints;
export type TBAEndpoint = keyof typeof endpoints
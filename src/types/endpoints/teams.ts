import { z } from "zod";
import { Team } from "../schemas/teams.js";
import { Endpoints } from "../index.js";

export const teamsPage = z.array(Team);

export const teamEndpoints = {
    "/teams/{page_num}": {
        schema: teamsPage,
        arguments: z.tuple([z.number()])
    }
} satisfies Endpoints;
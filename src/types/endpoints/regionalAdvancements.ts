import { Endpoints } from "../index.js";
import { z } from "zod";
import { Regional_Advancement, Regional_Ranking } from "../schemas/regionalAdvancements.js";

export const regionalAdvancementEndpoints = {
    "/regional_advancement/{year}": {
        schema: z.record(z.string(), Regional_Advancement).nullable(),
        arguments: z.tuple([z.number().int()])
    },
    "/regional_advancement/{year}/rankings": {
        schema: z.array(Regional_Ranking),
        arguments: z.tuple([z.number().int()])
    }
} satisfies Endpoints;
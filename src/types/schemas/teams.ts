import { z } from "zod";

export const Team_Simple = z.object({
    key: z.string().regex(/frc\d+/),
    team_number: z.number().int(),
    nickname: z.string(),
    name: z.string(),
    city: z.string().nullable(),
    state_prov: z.string().nullable(),
    country: z.string().nullable()
});

export const Team = z.object({
    postal_code: z.string().nullable(),
    website: z.string().nullable(),
    rookie_year: z.number().nullable()
}).merge(Team_Simple);
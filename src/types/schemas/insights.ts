import { z } from "zod";

export const LeaderboardInsights = z.object({
    data: z.object({
        rankings: z.array(z.object({
            value: z.number(),
            keys: z.array(z.string())
        })),
        key_type: z.enum(["team", "event", "match"])
    }),
    name: z.string(),
    year: z.number().int()
});

export const NotablesInsight = z.object({
    data: z.object({
        entries: z.array(z.object({
            context: z.array(z.string()),
            team_key: z.string()
        }))
    }),
    name: z.string(),
    year: z.number().int()
});
import { Endpoints } from "../index.js";
import { z } from "zod";
import { LeaderboardInsights, NotablesInsight } from "../schemas/insights.js";

export const insightEndpoints = {
	"/insights/leaderboards/{year}": {
		schema: z.array(LeaderboardInsights),
		arguments: z.tuple([z.int()]),
	},
	"/insights/notables/{year}": {
		schema: z.array(NotablesInsight),
		arguments: z.tuple([z.int()]),
	},
} satisfies Endpoints;
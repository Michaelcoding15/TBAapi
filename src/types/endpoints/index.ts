import { teamEndpoints } from "./teams.js";
import { statusEndpoints } from "./status.js";
import type { Endpoints } from "../index.js";
import { eventEndpoints } from "./events.js";
import { matchEndpoints } from "./matches.js";
import { districtEndpoints } from "./districts.js";
import { regionalAdvancementEndpoints } from "./regionalAdvancements.js";
import { insightEndpoints } from "./insights.js";
import { z } from "zod";

const Search_Index = z.object({
	teams: z.array(z.object({
		key: z.string(),
		nickname: z.string(),
	})),
	events: z.array(z.object({
		key: z.string(),
		name: z.string(),
	})),
});

export const endpoints = {
	...statusEndpoints,
	...teamEndpoints,
	...eventEndpoints,
	...matchEndpoints,
	...districtEndpoints,
	...regionalAdvancementEndpoints,
	...insightEndpoints,
	"/search_index": {
		schema: Search_Index,
		arguments: z.tuple([]),
	},

} satisfies Endpoints;

export type TBAEndpoints = typeof endpoints;
export type TBAEndpoint = keyof typeof endpoints
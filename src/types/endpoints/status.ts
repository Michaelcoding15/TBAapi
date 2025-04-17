import { z } from "zod";
import { API_Status_App_Version } from "../schemas/status.js";
import { Endpoints } from "../index.js";

export const status = z.object({
	current_season: z.number().int(),
	max_season: z.number().int(),
	is_datafeed_down: z.boolean(),
	down_events: z.array(z.string()),
	ios: API_Status_App_Version,
	android: API_Status_App_Version,
});

export const statusEndpoints = {
	"/status": {
		schema: status,
		arguments: z.tuple([]),
	},
} satisfies Endpoints;
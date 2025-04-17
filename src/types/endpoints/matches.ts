import { Endpoints } from "../index.js";
import { Match, Match_Simple } from "../schemas/matches.js";
import { z } from "zod";

export const matchEndpoints = {
	"/match/{match_key}": {
		schema: Match,
		arguments: z.tuple([z.string()]),
	},
	"/match/{match_key}/simple": {
		schema: Match_Simple,
		arguments: z.tuple([z.string()]),
	},
} satisfies Endpoints;
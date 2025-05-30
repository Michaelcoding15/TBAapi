import { Endpoints } from "../index.js";
import { Match, Match_Simple } from "../schemas/matches.js";
import { type } from "arktype";

export const matchEndpoints = {
	"/match/{match_key}": {
		schema: Match,
		arguments: type(["string"]),
	},
	"/match/{match_key}/simple": {
		schema: Match_Simple,
		arguments: type(["string"]),
	},
} satisfies Endpoints;
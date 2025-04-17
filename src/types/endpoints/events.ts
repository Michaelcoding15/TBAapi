import { Endpoints } from "../index.js";
import { z } from "zod";
import { Elimination_Alliance, Event, Event_Simple, Team_Event_Status, WLT_Record } from "../schemas/events.js";
import { Award, Media, Team, Team_Simple } from "../schemas/teams.js";
import { Match, Match_Simple } from "../schemas/matches.js";

const rankings = z.object({
	rankings: z.array(z.object({
		matches_played: z.number().int(),
		qual_average: z.number().nullable(),
		extra_stats: z.array(z.number()),
		sort_orders: z.array(z.number()).nullable(),
		record: WLT_Record.nullable(),
		rank: z.number().int(),
		dq: z.number().int(),
		team_key: z.string(),
	})),
	extra_stats_info: z.array(z.object({
		precision: z.number(),
		name: z.string(),
	})),
	sort_order_info: z.array(z.object({
		precision: z.number(),
		name: z.string(),
	})),
});

const eventPoints = z.object({
	points: z.record(z.string(), z.object({
		total: z.number().int(),
		alliance_points: z.number().int(),
		elim_points: z.number().int(),
		award_points: z.number().int(),
		qual_points: z.number().int(),
	})),
	tiebreakers: z.record(z.string(), z.object({
		highest_qual_scores: z.array(z.number().int()),
		qual_points: z.number().int(),
	}).partial()).optional(),
});

export const eventEndpoints = {
	"/events/{year}": {
		schema: z.array(Event),
		arguments: z.tuple([z.number().int()]),
	},
	"/events/{year}/simple": {
		schema: z.array(Event_Simple),
		arguments: z.tuple([z.number().int()]),
	},
	"/events/{year}/keys": {
		schema: z.array(z.string()),
		arguments: z.tuple([z.number().int()]),
	},
	"/event/{event_key}": {
		schema: Event,
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/simple": {
		schema: Event_Simple,
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/alliances": {
		schema: z.array(Elimination_Alliance).nullable(),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/insights": {
		schema: z.object({
			qual: z.unknown(),
			playoff: z.unknown(),
		}).nullable(),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/oprs": {
		schema: z.object({
			oprs: z.record(z.string(), z.number()),
			dprs: z.record(z.string(), z.number()),
			ccwms: z.record(z.string(), z.number()),
		}),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/coprs": {
		schema: z.record(z.string(), z.record(z.string(), z.number())),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/predictions": {
		schema: z.record(z.string(), z.unknown()).nullable(),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/rankings": {
		schema: rankings.nullable(),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/district_points": {
		schema: eventPoints.nullable(),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/regional_champs_pool_points": {
		schema: eventPoints.nullable(),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/advancement_points": {
		schema: eventPoints.nullable(),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/teams": {
		schema: z.array(Team),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/teams/simple": {
		schema: z.array(Team_Simple),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/teams/keys": {
		schema: z.array(z.string()),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/teams/statuses": {
		schema: z.record(z.string(), Team_Event_Status),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/matches": {
		schema: z.array(Match),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/matches/simple": {
		schema: z.array(Match_Simple),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/matches/keys": {
		schema: z.array(z.string()),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/awards": {
		schema: z.array(Award),
		arguments: z.tuple([z.string()]),
	},
	"/event/{event_key}/team_media": {
		schema: z.array(Media),
		arguments: z.tuple([z.string()]),
	},
} satisfies Endpoints;
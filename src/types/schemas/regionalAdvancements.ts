import { z } from "zod";

export const Regional_Advancement = z.object({
	cmp: z.boolean(),
	cmp_status: z.enum(["NotInvited", "PreQualified", "EventQualified", "PoolQualified", "Declined"]),
	qualifying_event: z.string().optional(),
	qualifying_award_name: z.string().optional(),
	qualifying_pool_week: z.number().int().optional(),
});

export const Regional_Ranking = z.object({
	team_key: z.string(),
	rank: z.number().int(),
	rookie_bonus: z.number().int().optional(),
	point_total: z.number(),
	single_event_bonus: z.number(),
	event_points: z.array(z.object({
		total: z.number(),
		alliance_points: z.number(),
		elim_points: z.number(),
		award_points: z.number(),
		event_key: z.string(),
		qual_points: z.number(),
	})).optional(),
});
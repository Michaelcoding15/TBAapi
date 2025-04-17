import { z } from "zod";

export const District_List = z.object({
	abbreviation: z.string(),
	display_name: z.string(),
	key: z.string(),
	year: z.number().int(),
});

export const District_Ranking = z.object({
	team_key: z.string(),
	rank: z.number().int(),
	rookie_bonus: z.number().int().optional(),
	point_total: z.number(),
	event_points: z.array(z.object({
		district_cmp: z.boolean(),
		total: z.number(),
		alliance_points: z.number(),
		elim_points: z.number(),
		award_points: z.number(),
		event_key: z.string(),
		qual_points: z.number(),
	})).optional(),
});

export const District_Advancement = z.object({
	dcmp: z.boolean(),
	cmp: z.boolean(),
});
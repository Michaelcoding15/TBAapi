import { z } from "zod";

export const API_Status_App_Version = z.object({
	min_app_version: z.number().int(),
	latest_app_version: z.number().int(),
});
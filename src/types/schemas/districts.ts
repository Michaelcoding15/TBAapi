import { z } from "zod";

export const District_List = z.object({
    abbreviation: z.string(),
    display_name: z.string(),
    key: z.string(),
    year: z.string()
})
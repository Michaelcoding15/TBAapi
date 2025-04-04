import { string, z } from "zod";

export const Team_Simple = z.object({
    key: z.string().regex(/frc\d+/),
    team_number: z.number().int(),
    nickname: z.string(),
    name: z.string(),
    city: z.string().nullable(),
    state_prov: z.string().nullable(),
    country: z.string().nullable()
});

export const Team = z.object({
    postal_code: z.string().nullable(),
    website: z.string().nullable(),
    rookie_year: z.number().nullable()
}).merge(Team_Simple);

export const Award_Recipient = z.object({
    team_key: z.string().nullable(),
    awardee: z.string().nullable()
})

export const Award = z.object({
    name: z.string(),
    award_type: z.number().int(),
    event_key: z.string(),
    recipient_list: z.array(Award_Recipient),
    year: z.number().int()
})

export const Team_Robot = z.object({
    year: z.number().int(),
    name: z.string(),
    key: z.string(),
    team_key: z.string()
})

export const Media = z.object({
    type: z.enum(["youtube", "cdphotothread", "imgur", "facebook-profile", "youtube-channel", "twitter-profile", "github-profile", "instagram-profile", "periscope-profile", "gitlab-profile", "grabcad", "instagram-image", "external-link", "avatar"]),
    foreign_key: z.string(),
    details: z.record(z.any()).nullable(),
    preferred: z.boolean(),
    team_keys: z.array(z.string()),
    direct_url: z.string(),
    view_url: z.string()
})
import { z } from "zod";
import { District_List } from "./districts.js";

export const Webcast = z.object({
    type: z.enum(["youtube", "twitch", "ustream", "iframe", "html5", "rtmp", "livestream", "direct_link", "mms", "justin", "stemtv", "dacast"]
    ),
    channel: z.string(),
    date: z.coerce.date().nullable(),
    file: z.string().nullable()
});

export const Event_Simple = z.object({
    key: z.string(),
    name: z.string(),
    event_code: z.string(),
    event_type: z.number().int(),
    district: District_List.nullable(),
    city: z.string().nullable(),
    state_prov: z.string().nullable(),
    country: z.string().nullable(),
    start_date: z.coerce.date(),
    end_date: z.coerce.date(),
    year: z.number().int()
});

export const Event = z.object({
    short_name: z.string().nullable(),
    event_type_string: z.enum(["Regional", "District", "District Championship Division", "District Championship", "Championship Division", "Championship Finals", "Festival of Champions", "Offseason", "Preseason", "Remote", "--"]),
    week: z.number().nullable(),
    address: z.string().nullable(),
    postal_code: z.string().nullable(),
    gmaps_place_id: z.string().nullable(),
    gmaps_url: z.string().nullable(),
    lat: z.number().nullable(),
    lng: z.number().nullable(),
    location_name: z.string().nullable(),
    timezone: z.string(),
    website: z.string().nullable(),
    first_event_id: z.string().nullable(),
    first_event_code: z.string().nullable(),
    webcasts: z.array(Webcast),
    division_keys: z.array(z.string()),
    parent_event_key: z.string().nullable(),
    playoff_type: z.number().int().nullable(),
    playoff_type_string: z.enum(["Elimination Bracket (8 Alliances)", "Elimination Bracket (4 Alliances)", "Elimination Bracket (16 Alliances)", "Average Score (8 Alliances)", "Round Robin (6 Alliances)", "Double Elimination Bracket (8 Alliances)", "Best of 3 Finals", "Best of 5 Finals", "Custom"])
}).merge(Event_Simple);

export const WLT_Record = z.object({
    wins: z.number().int(),
    losses: z.number().int(),
    ties: z.number().int()
})

export const Team_Event_Status_rank = z.object({
    num_teams: z.number().int(),
    ranking: z.object({
        matches_played: z.number().int(),
        qual_average: z.number().nullable(),
        sort_orders: z.array(z.number()),
        rank: z.number().int(),
        dq: z.number().int(),
        team_key: z.string()
    }),
    record: WLT_Record.nullable(),
    sort_order_info: z.array(z.object({
        precision: z.number().int(),
        name: z.string()
    })),
    status: z.string()
})

export const Team_Event_Status_alliance_backup = z.object({
    in: z.string(),
    out: z.string()
})

export const Team_Event_Status_alliance = z.object({
    name: z.string().nullable(),
    number: z.number().int(),
    backup: Team_Event_Status_alliance_backup.nullable(),
    pick: z.number().int().min(0).max(2)
})

export const Team_Event_Status_playoff = z.object({
    level: z.enum(["qm", "ef", "qf", "sf", "f"]),
    current_level_record: WLT_Record.nullable(),
    record: WLT_Record.nullable(),
    status: z.enum(["won", "eliminated", "playing"]),
    playoff_average: z.number().nullable()
})

export const Team_Event_Status = z.object({
    alliance_status_str: z.string(),
    playoff_status_str: z.string(),
    overall_status_str: z.string(),
    next_match_key: z.string().nullable(),
    last_match_key: z.string().nullable(),
    qual: Team_Event_Status_rank.nullable(),
    alliance: Team_Event_Status_alliance.nullable(),
    playoff: Team_Event_Status_playoff.nullable()
})

export const Elimination_Alliance = z.object({
    name: z.string().nullable(),
    backup: z.object({
        in: z.string(),
        out: z.string()
    }).nullable(),
    declines: z.array(z.string()),
    picks: z.array(z.string()),
    status: z.object({
        playoff_average: z.number(),
        level: z.string(),
        record: WLT_Record.nullable(),
        current_level_record: WLT_Record.nullable(),
        status: z.string()
    })
})
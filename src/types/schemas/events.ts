import { z } from "zod";
import { District_List } from "./districts.js";

export const Webcast = z.object({
    type: z.enum(["youtube", "twitch", "ustream", "iframe", "html5", "rtmp", "livestream", "direct_link", "mms", "justin", "stemtv", "dacast"]
    ),
    channel: z.string(),
    date: z.coerce.date().nullable().optional(),
    file: z.string().nullable().optional()
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
    event_type_string: z.string(),
    week: z.number().nullable(),
    address: z.string().nullable(),
    postal_code: z.string().nullable(),
    gmaps_place_id: z.string().nullable(),
    gmaps_url: z.string().nullable(),
    lat: z.number().nullable(),
    lng: z.number().nullable(),
    location_name: z.string().nullable(),
    timezone: z.string().nullable(),
    website: z.string().nullable(),
    first_event_id: z.string().nullable(),
    first_event_code: z.string().nullable(),
    webcasts: z.array(Webcast),
    division_keys: z.array(z.string()),
    parent_event_key: z.string().nullable(),
    playoff_type: z.number().int().nullable(),
    playoff_type_string: z.string().nullable()
}).merge(Event_Simple);

export const WLT_Record = z.object({
    wins: z.number().int(),
    losses: z.number().int(),
    ties: z.number().int()
});

// Docs don't say it is nullable, but it has been null during testing
export const Team_Event_Status_rank = z.object({
    num_teams: z.number().int().nullable(),
    ranking: z.object({
        matches_played: z.number().int().nullable(),
        qual_average: z.number().nullable().nullable(),
        sort_orders: z.array(z.number()).nullable(),
        rank: z.number().int().nullable(),
        dq: z.number().int().nullable(),
        team_key: z.string().nullable()
    }).optional(),
    sort_order_info: z.array(z.object({
        precision: z.number().int().nullable(),
        name: z.string().nullable()
    })).nullable(),
    status: z.string().nullable()
}).partial();

export const Team_Event_Status_alliance_backup = z.object({
    in: z.string().optional(),
    out: z.string().optional()
});

export const Team_Event_Status_alliance = z.object({
    name: z.string().nullable().optional(),
    number: z.number().int(),
    backup: Team_Event_Status_alliance_backup.nullable().optional(),
    pick: z.number().int().min(-1).max(3)
});

export const Team_Event_Status_playoff = z.object({
    level: z.enum(["qm", "ef", "qf", "sf", "f"]).optional(),
    current_level_record: WLT_Record.nullable().optional(),
    record: WLT_Record.nullable().optional(),
    status: z.enum(["won", "eliminated", "playing"]).optional(),
    playoff_average: z.number().nullable().optional()
});

export const Team_Event_Status = z.object({
    alliance_status_str: z.string().optional(),
    playoff_status_str: z.string().optional(),
    overall_status_str: z.string().optional(),
    next_match_key: z.string().nullable().optional(),
    last_match_key: z.string().nullable().optional(),
    qual: Team_Event_Status_rank.nullable().optional(),
    alliance: Team_Event_Status_alliance.nullable().optional(),
    playoff: Team_Event_Status_playoff.nullable().optional()
});

export const Elimination_Alliance = z.object({
    name: z.string().nullable().optional(),
    backup: z.object({
        in: z.string(),
        out: z.string()
    }).nullable().optional(),
    declines: z.array(z.string()),
    picks: z.array(z.string()),
    status: z.object({
        playoff_average: z.number().nullable(),
        level: z.string(),
        record: WLT_Record.nullable(),
        current_level_record: WLT_Record.nullable(),
        status: z.string()
    }).partial().optional()
});
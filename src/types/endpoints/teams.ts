import { z } from "zod";
import { Award, Media, Team, Team_Robot, Team_Simple } from "../schemas/teams.js";
import { Endpoints } from "../index.js";
import { Event, Event_Simple, Team_Event_Status } from "../schemas/events.js";
import { District_List } from "../schemas/districts.js";
import { Match, Match_Simple } from "../schemas/matches.js";

export const teamEndpoints = {
    "/teams/{page_num}": {
        schema: z.array(Team),
        arguments: z.tuple([z.number()])
    },
    "/teams/{page_num}/simple": {
        schema: z.array(Team_Simple),
        arguments: z.tuple([z.number()])
    },
    "/teams/{page_num}/keys": {
        schema: z.array(z.string()),
        arguments: z.tuple([z.number()])
    },
    "/teams/{year}/{page_num}": {
        schema: z.array(Team),
        arguments: z.tuple([z.number(), z.number()])
    },
    "/teams/{year}/{page_num}/simple": {
        schema: z.array(Team_Simple),
        arguments: z.tuple([z.number(), z.number()])
    },
    "/teams/{year}/{page_num}/keys": {
        schema: z.array(z.string()),
        arguments: z.tuple([z.number(), z.number()])
    },
    "/team/{team_key}": {
        schema: Team,
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/simple": {
        schema: Team_Simple,
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/history": {
        schema: z.object({ events: z.array(Event), awards: z.array(Award)}),
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/years_participated": {
        schema: z.array(z.number()),
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/districts": {
        schema: z.array(District_List),
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/robots": {
        schema: z.array(Team_Robot),
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/events": {
        schema: z.array(Event),
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/events/simple": {
        schema: z.array(Event_Simple),
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/events/keys": {
        schema: z.array(z.string()),
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/events/{year}": {
        schema: z.array(Event),
        arguments: z.tuple([z.string(), z.number().int()]),
    },
    "/team/{team_key}/events/{year}/simple": {
        schema: z.array(Event_Simple),
        arguments: z.tuple([z.string(), z.number().int()]),
    },
    "/team/{team_key}/events/{year}/keys": {
        schema: z.array(z.string()),
        arguments: z.tuple([z.string(), z.number().int()])
    },
    "/team/{team_key}/events/{year}/statuses": {
        schema: z.record(z.string(), Team_Event_Status),
        arguments: z.tuple([z.string(), z.number().int()]),
    },
    "/team/{team_key}/event/{event_key}/matches": {
        schema: z.array(Match),
        arguments: z.tuple([z.string(), z.string()])
    },
    "/team/{team_key}/event/{event_key}/matches/simple": {
        schema: z.array(Match_Simple),
        arguments: z.tuple([z.string(), z.string()])
    },
    "/team/{team_key}/event/{event_key}/matches/keys": {
        schema: z.array(z.string()),
        arguments: z.tuple([z.string(), z.string()])
    },
    "/team/{team_key}/event/{event_key}/awards": {
        schema: z.array(Award),
        arguments: z.tuple([z.string(), z.string()])
    },
    "/team/{team_key}/event/{event_key}/status": {
        schema: z.array(Team_Event_Status),
        arguments: z.tuple([z.string(), z.string()])
    },
    "/team/{team_key}/awards": {
        schema: z.array(Award),
        arguments: z.tuple([z.string()])
    },
    "/team/{team_key}/awards/{year}": {
        schema: z.array(Award),
        arguments: z.tuple([z.string(), z.number()])
    },
    "/team/{team_key}/matches/{year}": {
        schema: z.array(Match),
        arguments: z.tuple([z.string(), z.number()])
    },
    "/team/{team_key}/matches/{year}/simple": {
        schema: z.array(Match_Simple),
        arguments: z.tuple([z.string(), z.number()])
    },
    "/team/{team_key}/matches/{year}/keys": {
        schema: z.array(z.string()),
        arguments: z.tuple([z.string(), z.number()])
    },
    "/team/{team_key}/media/{year}": {
        schema: z.array(Media),
        arguments: z.tuple([z.string(), z.number()])
    },
    "/team/{team_key}/media/tag/{media_tag}": {
        schema: z.array(Media),
        arguments: z.tuple([z.string(), z.string()])
    },
    "/team/{team_key}/media/tag/{media_tag}/{year}": {
        schema: z.array(Media),
        arguments: z.tuple([z.string(), z.string(), z.number().int()])
    },
    "/team/{team_key}/social_media": {
        schema: z.array(Media),
        arguments: z.tuple([z.string()])
    }
} satisfies Endpoints;
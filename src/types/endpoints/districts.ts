import { Endpoints } from "../index.js";
import { z } from "zod";
import { District_Advancement, District_List, District_Ranking } from "../schemas/districts.js";
import { Event, Event_Simple } from "../schemas/events.js";
import { Award, Team, Team_Simple } from "../schemas/teams.js";

export const districtEndpoints = {
    "/districts/{year}": {
        schema: z.array(District_List),
        arguments: z.tuple([z.number().int()])
    },
    "/district/{district_abbreviation}/history": {
        schema: z.array(District_List),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/events": {
        schema: z.array(Event),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/awards": {
        schema: z.array(Award),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/events/simple": {
        schema: z.array(Event_Simple),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/events/keys": {
        schema: z.array(z.string()),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/teams": {
        schema: z.array(Team),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/teams/simple": {
        schema: z.array(Team_Simple),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/teams/keys": {
        schema: z.array(z.string()),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/rankings": {
        schema: z.array(District_Ranking).nullable(),
        arguments: z.tuple([z.string()])
    },
    "/district/{district_key}/advancement": {
        schema: z.record(z.string(), District_Advancement).nullable(),
        arguments: z.tuple([z.string()])
    }
} satisfies Endpoints;
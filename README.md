# TBArequest

> Unofficial wrapper to request data from The Blue Alliance API


> [!WARNING]  
> This package relies on a beta version of Zod, so it might be unstable until Zod 4.0 comes out.

## Install
```bash
npm install tbarequest
```

## Usage
Use the `createTBACaller` function to create a function that can call the API.

```ts
import { createTBACaller } from "tbarequest";

const tba = createTBACaller("api_key")

const status = tba("/status")
const team = tba("/teams/{team_key}", 1014)
```

The `tba` function can call an endpoint and require all necessary arguments, and then return the results that are type-safe.

Find all the endpoints [here](https://www.thebluealliance.com/apidocs/v3).

## Coverage
The wrapper covers all endpoints besides endpoints relating to Zebra Motionworks and Timeseries.
The endpoints not covered include:
* /event/{event_key}/matches/timeseries
* /event/{event_key}/matches/timeseries
* /match/{match_key}/timeseries
* /match/{match_key}/zebra_motionworks

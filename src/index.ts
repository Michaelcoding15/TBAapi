import { z } from "zod";
import { Result, tryCatch } from "./utils.js";
import { endpoints, TBAEndpoint, TBAEndpoints } from "./types/endpoints/index.js";

/*
 * Creates a function that can call the TBA api.
 * @see https://www.thebluealliance.com/apidocs/v3
 * @param api_key The api key given to you from The Blue Alliance.
 * @returns A function that can request from any endpoint in the TBA api. Go to the TBA api docs to see more information on endpoints and arguments required.
 */
export function createTBACaller(api_key: string): <T extends TBAEndpoint>(endpoint: T, ...args: z.infer<TBAEndpoints[T]["arguments"]>) => Promise<Result<z.infer<TBAEndpoints[T]["schema"]>>> {
	return async <T extends TBAEndpoint>(endpoint: T, ...args: z.infer<TBAEndpoints[T]["arguments"]>) => await TBA(endpoint, api_key, ...args);
}

async function TBA<T extends TBAEndpoint>(endpoint: T, api_key: string, ...args: z.infer<TBAEndpoints[T]["arguments"]>): Promise<Result<z.infer<TBAEndpoints[T]["schema"]>>> {
	let numArg = -1;

	// Fills all the arguments that are needed.
	const filledEndpoint = endpoint.replace(/{(.+?)}/g, () => {
		numArg++;
		return args[numArg].toString();
	});

	const result = await tryCatch(fetch(`https://www.thebluealliance.com/api/v3${filledEndpoint}`, {
		headers: {
			"X-TBA-Auth-Key": api_key,
		},
	}));

	if (result.error) return {
		data: null, error: result.error,
	};

	if (result.data.status !== 200) return {
		data: null,
		error: new Error(`${result.data.status} - ${result.data.statusText}`),
	};

	const json = await tryCatch(result.data.json());
	if (json.error) return {
		data: null,
		error: new Error(`JSON didn't parse for endpoint ${endpoint}. Please contact the developers of the TBArequest package with this error: ${json.error.message}`),
	};

	const schema = endpoints[endpoint].schema.safeParse(json.data);
	if (!schema.success) return {
		data: null,
		error: new Error(`Schema for endpoint ${endpoint} didn't work. Please contact the developers of the TBArequest package with this error: ${schema.error.message}`),
	};

	return { data: schema.data, error: null };
}
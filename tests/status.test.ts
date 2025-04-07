import { expect, test } from "vitest";
import { getKeys, TBA } from "./index.js";
import { statusEndpoints } from "../src/types/endpoints/status.js";
import { z } from "zod";

const tests = {
    "/status": []
} satisfies { [key in keyof typeof statusEndpoints]: z.infer<(typeof statusEndpoints)[key]["arguments"]> };

for (const endpoint of getKeys(tests)) {
    test(endpoint, async () => {
        const result = await TBA(endpoint, ...tests[endpoint]);
        expect(result.error).toBe(null);
    });
}
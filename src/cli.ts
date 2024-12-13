import { parseArgs } from "node:util";

import { populateAllContributorsForRepository } from "./index.js";

export async function cli(args: string[]) {
	const { values } = parseArgs({
		args,
		options: {
			owner: {
				type: "string",
			},
			repository: {
				type: "string",
			},
		},
		strict: true,
	});

	if (!values.owner) {
		throw new Error("Missing required argument: --owner");
	}

	if (!values.repository) {
		throw new Error("Missing required argument: --repository");
	}

	await populateAllContributorsForRepository({
		owner: values.owner,
		repo: values.repository,
	});
}

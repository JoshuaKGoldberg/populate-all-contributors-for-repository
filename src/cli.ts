// eslint-disable-next-line n/no-unsupported-features/node-builtins -- parseArgs has been available (experimentally) since Node.js 18.3.0
import { parseArgs } from "node:util";

import { populateAllContributorsForRepository } from "./index.ts";

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

import { createCli } from "parse-standard-args";
import { z } from "zod";

import { populateAllContributorsForRepository } from "./index.js";

const populateCli = createCli({
	description:
		"Populates the .all-contributorsrc for a repository using all-contributors-for-repository.",
	examples: [
		"populate-all-contributors-for-repository --owner JoshuaKGoldberg --repository create-typescript-app",
	],
	name: "populate-all-contributors-for-repository",
	options: z.object({
		owner: z
			.string()
			.min(1, "Must not be empty.")
			.describe("GitHub organization or user that owns the repository"),
		repository: z
			.string()
			.min(1, "Must not be empty.")
			.describe("Name of the repository on GitHub"),
	}),
});

export async function cli(args: string[]) {
	const parsed = await populateCli.run(args);
	if (!parsed) {
		return;
	}

	const { owner, repository } = parsed.values;

	try {
		await populateAllContributorsForRepository({ owner, repo: repository });
	} catch (error) {
		console.error(error instanceof Error ? error.message : String(error));
		process.exitCode = 1;
	}
}

import {
	getAllContributorsForRepository,
	type RawAllContributorsForRepositoryOptions,
} from "all-contributors-for-repository";
import { $ } from "execa";

export type { RawAllContributorsForRepositoryOptions };

export async function populateAllContributorsForRepository(
	options: RawAllContributorsForRepositoryOptions,
) {
	const contributors = await getAllContributorsForRepository(options);

	for (const [contributor, contributions] of Object.entries(contributors)) {
		const contributionTypes = Object.keys(contributions).join(",");
		await $`npx all-contributors-cli add ${contributor} ${contributionTypes}`;
	}
}

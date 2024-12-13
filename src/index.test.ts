import { describe, expect, it, vi } from "vitest";

import { populateAllContributorsForRepository } from "./index.js";

const mockGetAllContributorsForRepository = vi.fn();

vi.mock("all-contributors-for-repository", () => ({
	get getAllContributorsForRepository() {
		return mockGetAllContributorsForRepository;
	},
}));

const mock$ = vi.fn();

vi.mock("execa", () => ({
	get $() {
		return mock$;
	},
}));

describe("populateAllContributorsForRepository", () => {
	it("runs all-contributors-cli for each contributor", async () => {
		mockGetAllContributorsForRepository.mockResolvedValueOnce({
			JoshuaKGoldberg: {
				docs: [1],
				ideas: [2, 3],
			},
			OtherPerson: {
				tool: [4],
			},
		});

		await populateAllContributorsForRepository({
			owner: "test-owner",
			repo: "test-repository",
		});

		expect(mock$.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    [
			      "npx all-contributors-cli add ",
			      " ",
			      "",
			    ],
			    "JoshuaKGoldberg",
			    "docs,ideas",
			  ],
			  [
			    [
			      "npx all-contributors-cli add ",
			      " ",
			      "",
			    ],
			    "OtherPerson",
			    "tool",
			  ],
			]
		`);
	});
});

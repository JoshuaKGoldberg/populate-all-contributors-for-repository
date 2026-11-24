import { describe, expect, it, vi } from "vitest";

import { cli } from "./cli.ts";

const mockPopulateAllContributorsForRepository = vi.fn();

vi.mock("./index.ts", () => ({
	get populateAllContributorsForRepository() {
		return mockPopulateAllContributorsForRepository;
	},
}));

describe(cli, () => {
	it("throws an error when --owner isn't provided", async () => {
		await expect(
			cli(["--repository", "test-repository"]),
		).rejects.toMatchInlineSnapshot(
			`[Error: Missing required argument: --owner]`,
		);
	});

	it("throws an error when --repository isn't provided", async () => {
		await expect(cli(["--owner", "test-owner"])).rejects.toMatchInlineSnapshot(
			`[Error: Missing required argument: --repository]`,
		);
	});

	it("calls populateAllContributorsForRepository when --owner and --repository are provided", async () => {
		await cli(["--repository", "test-repository", "--owner", "test-owner"]);

		expect(mockPopulateAllContributorsForRepository).toHaveBeenCalledWith({
			owner: "test-owner",
			repo: "test-repository",
		});
	});
});

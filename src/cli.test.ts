import {
	afterEach,
	beforeEach,
	describe,
	expect,
	it,
	type MockInstance,
	vi,
} from "vitest";

import { cli } from "./cli.js";

const mockPopulateAllContributorsForRepository = vi.fn();

vi.mock("./index.js", () => ({
	get populateAllContributorsForRepository() {
		return mockPopulateAllContributorsForRepository;
	},
}));

describe("cli", () => {
	let mockError: MockInstance<typeof console.error>;
	let mockLog: MockInstance<typeof console.log>;

	beforeEach(() => {
		mockError = vi.spyOn(console, "error").mockImplementation(() => undefined);
		mockLog = vi.spyOn(console, "log").mockImplementation(() => undefined);
	});

	afterEach(() => {
		// console-fail-test fails tests that print, so clear the expected prints.
		mockError.mockClear();
		mockLog.mockClear();
		process.exitCode = undefined;
	});

	it("calls populateAllContributorsForRepository when --owner and --repository are provided", async () => {
		await cli(["--repository", "test-repository", "--owner", "test-owner"]);

		expect(mockPopulateAllContributorsForRepository).toHaveBeenCalledWith({
			owner: "test-owner",
			repo: "test-repository",
		});
		expect(mockError).not.toHaveBeenCalled();
		expect(process.exitCode).toBeUndefined();
	});

	it("reports an error when --owner isn't provided", async () => {
		await cli(["--repository", "test-repository"]);

		expect(mockPopulateAllContributorsForRepository).not.toHaveBeenCalled();
		expect(mockError.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "--owner is required.
			Run 'populate-all-contributors-for-repository --help' for usage.",
			  ],
			]
		`);
		expect(process.exitCode).toBe(1);
	});

	it("reports an error when --repository isn't provided", async () => {
		await cli(["--owner", "test-owner"]);

		expect(mockPopulateAllContributorsForRepository).not.toHaveBeenCalled();
		expect(mockError.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "--repository is required.
			Run 'populate-all-contributors-for-repository --help' for usage.",
			  ],
			]
		`);
		expect(process.exitCode).toBe(1);
	});

	it("reports an error when --owner is empty", async () => {
		await cli(["--owner", "", "--repository", "test-repository"]);

		expect(mockPopulateAllContributorsForRepository).not.toHaveBeenCalled();
		expect(mockError.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "--owner: Must not be empty.
			Run 'populate-all-contributors-for-repository --help' for usage.",
			  ],
			]
		`);
		expect(process.exitCode).toBe(1);
	});

	it("suggests a known flag when an unknown flag is provided", async () => {
		await cli(["--owners", "test-owner", "--repository", "test-repository"]);

		expect(mockPopulateAllContributorsForRepository).not.toHaveBeenCalled();
		expect(mockError.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "Unknown flag: --owners (did you mean --owner?)
			--owner is required.
			Run 'populate-all-contributors-for-repository --help' for usage.",
			  ],
			]
		`);
		expect(process.exitCode).toBe(1);
	});

	it("prints help when --help is provided", async () => {
		await cli(["--help"]);

		expect(mockPopulateAllContributorsForRepository).not.toHaveBeenCalled();
		expect(mockLog.mock.calls).toMatchInlineSnapshot(`
			[
			  [
			    "Usage: populate-all-contributors-for-repository [options]

			Populates the .all-contributorsrc for a repository using all-contributors-for-repository.

			Options:
			      --owner <string>       GitHub organization or user that owns the repository (required)
			      --repository <string>  Name of the repository on GitHub (required)
			  -h, --help                 Show this help message

			Examples:
			  populate-all-contributors-for-repository --owner JoshuaKGoldberg --repository create-typescript-app",
			  ],
			]
		`);
		expect(process.exitCode).toBeUndefined();
	});

	it("reports the message of an error from populating contributors", async () => {
		mockPopulateAllContributorsForRepository.mockRejectedValueOnce(
			new Error("Oh no!"),
		);

		await cli(["--owner", "test-owner", "--repository", "test-repository"]);

		expect(mockError.mock.calls).toEqual([["Oh no!"]]);
		expect(process.exitCode).toBe(1);
	});
});

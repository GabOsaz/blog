const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/*
 * @jest-environment node
 */

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "<rootDir>/jest.env.js"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "\\.test\\.[jt]sx?$",
  moduleNameMapper: {},
};

module.exports = createJestConfig(customJestConfig);

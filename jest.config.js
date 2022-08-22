const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  ...tsjPreset,
  testEnvironment: "jsdom",
  collectCoverageFrom: ["packages/**/*.{ts,tsx}"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/examples",
    "<rootDir>/tooling/cra-template*",
  ],
  //   transform: {
  //     "^.+\\.(ts|tsx|js|jsx)?$": "@swc-node/jest",
  //   },
  // transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push|react-native)",
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    // "./scripts/setup-test.ts",
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  //   watchPlugins: [
  //     "jest-watch-typeahead/filename",
  //     "jest-watch-typeahead/testname",
  //   ],
};

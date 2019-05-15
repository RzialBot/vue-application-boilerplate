module.exports = {
    clearMocks: true,

    collectCoverage: true,
    collectCoverageFrom: [
        '**/src/**/*.{[tj]s?(x),vue}',
    ],

    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/src/main.js',
    ],

    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },

    moduleFileExtensions: ['js', 'json', 'vue'],
    moduleNameMapper: {
        '@src/(.*)$': '<rootDir>/src/$1',
        '@res/(.*)$': '<rootDir>/res/$1',
    },

    snapshotSerializers: ['jest-serializer-vue'],

    testMatch: [
        '**/test/**/?(*.)+(spec|test).[tj]s?(x)',
    ],

    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': 'vue-jest',
    },
};

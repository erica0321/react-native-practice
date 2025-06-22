// 환경 변수 설정
process.env.EXPO_ROUTER_APP_ROOT = "./app";

module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "~": "./",
          "@components": "./components",
          "@screens": "./screens",
          "@assets": "./assets",
          "@hooks": "./hooks",
          "@utils": "./utils",
          "@constants": "./constants",
          "@types": "./types",
        },
      },
    ],
  ],
};

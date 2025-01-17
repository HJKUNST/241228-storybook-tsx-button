/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  // 👇 없으면  Failed to compile. 뜸
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.json$/, //json 파일 처리 규칙
      type: "json", // Json 파일 처리할 수 있는 기본 webpack유형
    });
    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx'); //확장자 지원 추가
    return config;
  },
};
export default config;

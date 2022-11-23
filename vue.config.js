const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 开发服务器
  devServer: {
    // 客户端代理
    proxy: {
      // 模拟
      "/api": {
        target:
          "https://console-mock.apipost.cn/mock/214735ef-b6da-4ec4-8fbf-1bf5af70915b",
        // target: "http://localhost:8082",
        ws: true,
        changeOrigin: true,
      },
    },
  },
});

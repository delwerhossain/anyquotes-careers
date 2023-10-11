module.exports = {
  apps: [
    {
      name: "server-careers",
      script: "index.js",
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};

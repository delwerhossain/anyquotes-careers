module.exports = {
  apps: [
    {
      name: "express-app",
      script: "index.js", // Your Express.js app entry point
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "100M",
    },
  ],
};

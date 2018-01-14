const { FuseBox, WebIndexPlugin, EnvPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "./",
  target: "server",
  debug: true,
  log: true,
  output: "dist/$name.js",
  plugins: [EnvPlugin({ NODE_ENV: "development", bar: "barbar" })]
});

fuse.bundle("app").instructions("> src/index.js");

fuse.run();

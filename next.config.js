const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  env: {
    basePath: isProduction ? '/timer-todo-front' : ''
  },
  reactStrictMode: true,
  basePath: isProduction ? '/timer-todo-front' : '',
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
}

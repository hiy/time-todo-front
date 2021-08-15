const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  basePath: isProduction ? '/timer-todo-front' : '',
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
}

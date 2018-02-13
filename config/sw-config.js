module.exports = {
  cache: {
    cacheId: "react-electrode-sample",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "react-electrode-sample",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};

module.exports = {
  siteMetadata: {
    siteTitle: `react-native-dezkit`,
    defaultTitle: `react-native-dezkit`,
    siteTitleShort: `react-native-dezkit`,
    siteDescription: `React native component package`,
    siteUrl: `https://deznit.com`,
    siteAuthor: `deznit`,
    siteImage: `/faviconDezkit.png`,
    siteLanguage: `en`,
    themeColor: `#70D08A`,
    basePath: `/`,
    footer: `Dezkit By deznit`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/faviconDezkit.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://rocketdocs.netlify.com`,
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
};

module.exports = {
  pathPrefix: "/f2e-anonymous-chatroom",
  siteMetadata: {
    title: `Anonymous Chatroom`,
    description: `劈哩啪啦的鍵盤聲，看似打程式很認真... | Designed by Miss_Y`,
    author: `@EasonChiang7178`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anonymous-chatroom`,
        short_name: `chat`,
        start_url: `/`,
        background_color: `#1E1E1E`,
        theme_color: `#D4D4D4`,
        display: `minimal-ui`,
        icon: `src/images/anonymous-chatroom-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

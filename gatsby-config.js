/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby_tailwind`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout', // must load before 'gatsby-plugin-react-i18next'.
      options: {
        component: require.resolve('./src/components/layout.js')
      }
    },
    'gatsby-plugin-postcss',
  ],
}

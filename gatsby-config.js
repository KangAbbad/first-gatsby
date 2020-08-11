/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Learn GatsbyJS',
        short_name: 'Learn GatsbyJS',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#007900',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/icon-path*']
         }
      }
   },
  ],
}

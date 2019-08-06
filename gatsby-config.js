module.exports = {
  siteMetadata: {
    title: `Taxprepnearme.com`,
    slogan: `Find professional tax preparers near me`,
    description: `tax prep near me - find professional IRS tax preparers near you`,
    author: `Ping`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
      // 'gatsby-plugin-styled-components',
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            subsets: [`latin`],
          },
          {
            family: `Raleway`,
            variants: [`400`, `300`, `600`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: true,
        defer: true,
        args: `?render=explicit`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-68635741-2`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // {
    //   resolve: 'gatsby-source-apiserver',
    //   options: {
    //     // Type prefix of entities from server
    //     typePrefix: 'internal__',
    //
    //     // The url, this should be the endpoint you are attempting to pull data from
    //     url: `https://lc7rjdkgbf.execute-api.us-east-1.amazonaws.com/prod/postcontact`,
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     // Request body
    //     data: {
    //     },
    //
    //     // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
    //     // using this name. i.e. posts.json
    //     name: `posts`,
    //
    //     // Nested level of entities in response object, example: `data.posts`
    //     entityLevel: `data.posts`,
    //
    //     // Define schemaType to normalize blank values
    //     // example:
    //     // const postType = {
    //     //   id: 1,
    //     //   name: 'String',
    //     //   published: true,
    //     //   object: {a: 1, b: '2', c: false},
    //     //   array: [{a: 1, b: '2', c: false}]
    //     // }
    //     schemaType: postType,
    //
    //     // Request parameters
    //     // Only available from version 2.1.0
    //     params: {
    //       per_page: 1
    //     },
    //
    //     // Simple authentication, optional
    //     auth: {
    //       username: 'myusername',
    //       password: 'supersecretpassword1234'
    //     },
    //
    //     // Advanced authentication for Auth0
    //     // Only available from version 2.1.0
    //     auth0Config: {
    //       method: 'POST',
    //       url: 'https://MyAuth0Domain/oauth/token',
    //       headers: { 'content-type': 'application/json' },
    //       data: {
    //         grant_type: 'password',
    //         username: 'myusername',
    //         password: 'PassAWordHere',
    //         audience: 'Auth0APIAudience',
    //         scope: 'openid',
    //         client_id: 'AUTH0_CLIENT_ID',
    //         client_secret: 'AUTH0_SECRET'
    //       },
    //       json: true
    //     },
    //
    //     // Optional payload key name if your api returns your payload in a different key
    //     // Default will use the full response from the http request of the url
    //     payloadKey: `body`,
    //
    //     // Optionally save the JSON data to a file locally
    //     // Default is false
    //     localSave: false,
    //
    //     //  Required folder path where the data should be saved if using localSave option
    //     //  This folder must already exist
    //     path: `${__dirname}/src/data/auth/`,
    //
    //     // Optionally include some output when building
    //     // Default is false
    //     verboseOutput: true, // For debugging purposes
    //
    //     // Optionally skip creating nodes in graphQL.  Use this if you only want
    //     // The data to be saved locally
    //     // Default is false
    //     skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want
    //
    //     // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
    //     // any not specified are defaulted to the general properties that are specified
    //     // Only available from version 2.1.0
    //     entitiesArray: [{
    //       url: `http://yourapi.com/api/v1/posts`,
    //       method: 'post',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       name: `posts`,
    //     }]
    //   }
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

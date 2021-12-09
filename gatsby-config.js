module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "site"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "recipedata",
        fieldName: "recipedata",
        url:
          "https://api-us-east-1.graphcms.com/v2/ckwt927zr4ll801z1975jcrr8/master"
      }
    }
  ]
};

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "landing-page-v1",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

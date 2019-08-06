/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  const { createPage } = actions

  const articleTemplate = path.resolve('./src/templates/article.js')
  const categoryTemplate = path.resolve('./src/templates/category.js')

  return graphql(`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              category
            }            
          }
        }
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const articles = result.data.allMarkdownRemark.edges

    // Create article detail pages
    articles.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: articleTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        }
      })
    })

    // Category pages
    const categories = result.data.allMarkdownRemark.group
    const totalCount = result.data.allMarkdownRemark.totalCount

    // Make category pages
    categories.forEach(categoryItem => {
      const category = categoryItem.fieldValue
      createPage({
        path: `/categories/${_.kebabCase(categoryItem.fieldValue.replace(/ /g, '-'))}/`,
        component: categoryTemplate,
        context: {
          totalCount, // Total articles count
          categories, // all categories
          category,   // current category
        },
      })
    })
  })
}

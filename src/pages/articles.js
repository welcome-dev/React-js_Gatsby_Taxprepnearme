import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryHeader from "../components/category-header"
import ArticleCard from "../components/article-card"

const Articles = ({ data }) => {
  const categories = [{fieldValue: 'all', totalCount: data.allMarkdownRemark.totalCount}, ...data.allMarkdownRemark.group]

  return (
    <Layout>
      <SEO title="Articles" />

      <CategoryHeader categories={categories} currentCat="all" />

      <div>
        {
          data.allMarkdownRemark.edges.map(function({node}) {
            return <ArticleCard key={node.id} article={node} />
          })
        }
      </div>
    </Layout>
  )
}

export default Articles

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// export default () => {
//   return (
//     <Layout>
//       <div>Hello blog post</div>
//     </Layout>
//   )
// }

export default ({ data }) => {
  const article = data.markdownRemark
  return (
    <Layout>
      <div>
        <h3>{article.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
        <h6>
          By {article.frontmatter.author}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ color: `grey`, fontSize: `1.5rem` }}>
            {article.frontmatter.date}
          </span>
        </h6>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
      }
    }
  }
`

import React from 'react'

import Layout from '../components/layout'
import styles from './blog-post.module.scss'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className={styles.richtext}
      />
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

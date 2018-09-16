import React from 'react'
import { Link } from 'gatsby'
import styles from '../components/styles.module.scss'

import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <div className={styles.content} />
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link to={node.fields.slug} key={node.id}>
          <h3>
            {node.frontmatter.title} <span>{node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </Link>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

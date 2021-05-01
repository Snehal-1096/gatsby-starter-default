import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
const IndexPage = ({data}) => (
  <Layout>
  <h1>Hi people</h1>
  <p>Welcome to your new Gatsby site.</p>
  <p>Now go build something great.</p>

  {data.allStrapiArticles.nodes.map((item, index) => (
    <li key={index}>
      <h2>{item.title}</h2>
      <Img fixed={item.image.childImageSharp.fixed} />
      <p>{item.content}</p>
    </li>
  ))}
</Layout>

)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allStrapiArticles {
      nodes {
        id
        title
        content
        image {
          id
          childImageSharp {
            fixed(width: 400, height: 200
            ) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

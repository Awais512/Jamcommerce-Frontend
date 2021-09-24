import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FeaturedProducts = () => {
  const data = useStaticQuery(graphql`
    query GetFeatured {
      allStrapiProduct(filter: { featured: { eq: true } }) {
        edges {
          node {
            name
            strapiId
            variants {
              price
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <div>
      <h1>Featured Products</h1>
    </div>
  )
}

export default FeaturedProducts

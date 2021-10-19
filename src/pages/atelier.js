import React from 'react'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { fonts } from '../lib/typography'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { graphql } from 'gatsby'
import SimpleCard from '../components/SimpleCard'

const ToolPage = ({ data: { site, toolsQuery } }) => {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          margin-top: 1.6em;
          margin-bottom: 2em;
          .header {
            grid-column-start: 1;
            grid-column-end: 3;
            margin-bottom: 1em;
            max-width: 700px;
            h1 {
              margin-bottom: 0.4em;
            }
          }
          .toolsGrid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 3em;
          }
        `}
      >
        <section className="header">
          <h1>Essays</h1>
          <p>Coherent thoughts in essay format, almost always illustrated.</p>
        </section>

        {/* ----------- Essays Section ----------- */}

        <section>
          <div className="toolsGrid">
            {toolsQuery.edges.map(({ node: tool }) => (
              <Link
                to={`/${tool.frontmatter.slug}`}
                aria-label={`View ${tool.frontmatter.title}`}
              >
                <SimpleCard
                  margintop="0em"
                  marginbottom="0em"
                  hover
                  key={tool.id}
                  css={css`
                    font-family: ${fonts.regularSans};
                    max-width: 350px;
                    margin-bottom: 1em;
                    margin-right: 1em;
                    padding: 0.6em 1.4em 1.6em 1.4em;
                    h4 {
                      font-size: 1.1em;
                      margin-top: 0.2em;
                      margin-bottom: 0.4em;
                      transition: all 150ms ease;
                      &:hover: {
                        color: ${theme.colors.primary};
                      }
                    }
                    h5 {
                      margin-bottom: 0;
                      line-height: 1.3em;
                    }
                  `}
                >
                  <Img fluid={tool.frontmatter.cover.childImageSharp.fluid} />
                  <h4>{tool.frontmatter.title}</h4>
                  <h5>{tool.frontmatter.description}</h5>
                </SimpleCard>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default ToolPage

export const ToolsPageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }

    toolQuery: allMdx(
      filter: {
        frontmatter: { type: { eq: "tool" }, published: { ne: false } }
      }
      sort: { order: DESC, fields: frontmatter___updated }
      limit: 20
    ) {
      edges {
        node {
          excerpt(pruneLength: 120)
          id
          fields {
            title
            slug
            updated
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            updated(formatString: "MMMM DD, YYYY")
            description
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

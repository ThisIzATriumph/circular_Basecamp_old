import React from 'react'
import { graphql } from 'gatsby'
import BrainNote from '../components/BrainNote'
import BrainTool from '../components/BrainTool'

export default props => {
  return <BrainNote note={props.data.brainNote} />
}

export const query = graphql`
  query BrainNoteWithRefsBySlug($slug: String!) {
    site {
      ...site
    }
    brainNote(slug: { eq: $slug }) {
      slug
      title
      childMdx {
        body
        frontmatter {
          title
          updated(formatString: "MMM DD, YYYY")
          startDate(formatString: "MMM DD, YYYY")
          slug
          topics
          growthStage
        }
      }
      inboundReferenceNotes {
        title
        slug
        childMdx {
          excerpt(pruneLength: 200)
        } 
      }
      outboundReferenceNotes {
        title
        slug
        childMdx {
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`

export default props => {
  return <BrainTool tool={props.data.brainTool} />
}

export const query = graphql`
  query BrainToolWithRefsBySlug($slug: String!) {
    site {
      ...site
    }
    brainTool(slug: { eq: $slug }) {
      slug
      title
      childMdx {
        body
        frontmatter {
          title
          updated(formatString: "MMM DD, YYYY")
          startDate(formatString: "MMM DD, YYYY")
          slug
          topics
          growthStage
        }
      }
      inboundReferenceTools {
        title
        slug
        childMdx {
          excerpt(pruneLength: 200)
        } 
      }
      outboundReferenceTools {
        title
        slug
        childMdx {
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`

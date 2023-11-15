import { cache } from 'react'
import { createClient } from 'contentful'

export const getProjects = cache(async () => {
  const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

  if (!CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('Contentful access token not found')
  }

  const contentfulClient = createClient({
    space: 'hn4sqfjtjtnp',
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  })

  const projectsResponse = await contentfulClient.getEntries({
    content_type: 'project',
  })
  return projectsResponse.items
})

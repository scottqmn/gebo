import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://gebo.cdn.prismic.io/api/v2'
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}
// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

export const linkResolver = (doc) => {
  // URL for a insight posts
  if (doc.type === 'insight') {
    return `/insight/${doc.uid}`
  }

  // URL for a report post
  if (doc.type === 'report') {
    return `/report/${doc.uid}`
  }

  // Backup for all other types
  return '/'
}

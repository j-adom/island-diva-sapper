import sanityClient from '@sanity/client'
const api = {
  "projectId": "synklyv9",
  "dataset": "production"
}
const { projectId, dataset } = api
const client = sanityClient({
  projectId,
  dataset,
  apiVersion: '2021-07-25', // use a UTC date string
  useCdn: true
})

export default client

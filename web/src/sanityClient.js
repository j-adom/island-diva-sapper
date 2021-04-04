import sanityClient from '@sanity/client'
import { api } from '../../studio/sanity.json'
const { projectId, dataset } = api

const client = sanityClient({
  projectId,
  dataset,
  // apiVersion: '2021-03-25', // use a UTC date string
  useCdn: true
})

export default client

import { createClient } from 'next-sanity'

export default createClient({
  projectId: 'r2zdcffr',
  dataset: 'production',
  apiVersion: '2023-01-13',
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
})

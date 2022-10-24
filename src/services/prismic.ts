import * as Prismic from '@prismicio/client';
import sm from '../../sm.json'

export function getPrismicClient() {
  const prismicClient = Prismic.createClient(
    sm.apiEndpoint,
    {
      accessToken: process.env.PRISMIC_ACESS_TOKEN
    }
  )

  return prismicClient;
}
import type { Document } from '@contentful/rich-text-types'
import { createClient } from 'contentful'

export const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID || '',
	environment: 'master',
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

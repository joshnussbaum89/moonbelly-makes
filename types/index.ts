// This file contains all universal types used in this project
import { TypedObject } from '@portabletext/types'

// Posts
export interface Post {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  _key: string
  body: TypedObject[]
  category: string
  mainImage: {
    _type: string
    alt: string
    asset: Object[]
  }
  publishedAt: string
  slug: { _type: string; current: string }
  tag: []
  title: string
}

export interface PostProps {
  posts: Post[]
}

export interface SlimPost {
  _id: string
  category: string
  mainImage: {
    _type: string
    alt: string
    asset: Object[]
  }
  slug: { _type: string; current: string }
  title: string
}

// Tags
export interface Tag {
  title: string
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

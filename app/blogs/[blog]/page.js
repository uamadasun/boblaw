import { getBlog, getBlogs } from '@/sanity/sanity-utils';
import React from 'react'

export default  async function Blog({params}) {
    const slug = params.blog;
    const blog = await getBlog(slug);
  return (
    <div>
        <p>{blog.name}</p>
    </div>
  )
}

import fetch from 'node-fetch'

export const getData = async function(id) {
  const post = await fetch(`http://localhost:8000/api/posts/${id}`)
  const postBody = await post.json()
  return { postBody }
}

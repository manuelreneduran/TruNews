export const sortBy = (posts, method) => {
  if (posts)
  switch (method) {
    case 'top':
      posts = posts.sort((a, b) => {
        return b.rank - a.rank;
      })
      return posts;
    default:
      return posts;
  }
  return posts;
}
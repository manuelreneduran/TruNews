export const sortBy = (posts, method) => {
  //[{}, {}, ...]
  switch (method) {
    case 'top':
      posts = posts.sort((a, b) => {
        return b.rank - a.rank;
      })
      return posts;
  }
}
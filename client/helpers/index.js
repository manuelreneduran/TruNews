export const sortBy = (posts, method) => {
  //[{}, {}, ...]
  switch (method) {
    case 'top':
      console.log(posts);
      posts = posts.sort((a, b) => {
        return b.rank - a.rank;
      })
      console.log(posts)
      return posts;
  }
}
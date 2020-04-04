const removeSource = (title) => {
  title = title.split(' ').reverse();
  const hyphenIndex = title.indexOf('-');
  return title.slice(hyphenIndex + 1).reverse().join(' ');
}

export const removeSources = articles => {
  for (let article of articles) {
    if (article.title) {
      article.title = removeSource(article.title);
    }
  }
  return articles;
}

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

export const setToLocalStorage = (token) => {
  localStorage.setItem('token', token)
}

export const deleteFromLocalStorage = () => {
  localStorage.removeItem("token");
}

export const getFromLocalStorage = () => {
  return localStorage.getItem("token");
}
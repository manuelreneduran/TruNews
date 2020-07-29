# TruNews

- This is a news aggregate webapp in the vein of Reuters or AP News
- It uses the OpenNews API to get a list of recent articles which it then
  renders (NOTE: The API only works in development as it requires a fee for production; I currently have it using a list of static articles)

-It uses PostgreSQL in the backend to save user information and provide
sessions so that a user can save and delete articles.

# Getting Started

- Set your NewsAPI key to your process.env.NEWS_API_KEY

- Set your Node environment to your process.env.NODE_ENV

- npm install

- npm run react-dev

- npm run server-dev

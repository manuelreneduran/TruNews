module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './knex/migrations'
    },
    seeds: {
      directory: './knex/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/secrets_test',
    migrations: {
      directory: './knex/migrations'
    },
    seeds: {
      directory: './knex/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './knex/migrations'
    },
    seeds: {
      directory: './knex/seeds/dev'
    },
    useNullAsDefault: true
  }
};
module.exports = {
  development: {
    username: "postgres",
    password: null,
    database: "notes-app-db-dev",
    host: "127.0.0.1",
    dialect: "postgres",
    migrationStorage: "json",
  },
  production: {
    use_env_variable: true,
  },
};

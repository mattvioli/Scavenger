import pg from "pg"

const db = new pg.Pool({
  database: "scavenger",
  password: process.env.DB_PASSWORD
});

db.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message)
})

export default db;
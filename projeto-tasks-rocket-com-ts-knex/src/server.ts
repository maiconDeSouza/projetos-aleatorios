import fastify from 'fastify'
import { knex } from '../database/database'

const app = fastify()

app.get('/tasks', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: 1992,
  })
  .then(() => {
    console.log(`HTTP Server Running!`)
  })

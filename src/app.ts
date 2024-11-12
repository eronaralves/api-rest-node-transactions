import fastify from 'fastify'
import cookie from '@fastify/cookie'

// Routes
import { transactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

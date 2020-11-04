import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({ json: 'Hello World' })
})

export default routes

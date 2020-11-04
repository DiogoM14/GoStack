import {  Request, Response } from 'express'
import {createUser} from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'user@example.com',
    password: 'password',
    techs: [
      'Node.js', 
      'React', 
      'Vue',
      { title: 'JavaScript', experience: 100 }
    ]
  })

  console.log(user.techs)

  return response.json({message: 'Hello World'})
}
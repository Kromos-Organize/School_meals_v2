import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const student = await axios
      .get(`http://localhost:5001/student/${req.query.id}`, { headers: req.headers })
      .then(res => res.data)

    res.status(200).json(student)
  } catch (error: any) {
    res.status(error.response.status).send(error)
  }
}

import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const admin = await axios
      .get(`http://localhost:5001/admin/${req.query.id}`, { headers: req.headers })
      .then(res => res.data)

    res.status(200).json(admin)
  } catch (error: any) {
    res.status(error.response.status).send(error)
  }
}

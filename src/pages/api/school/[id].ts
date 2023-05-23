import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const school = await axios
      .get(`http://localhost:5001/school/${req.query.id}`, { headers: req.headers })
      .then(res => res.data)

    res.status(200).json(school)
  } catch (error) {
    res.send(error)
  }
}

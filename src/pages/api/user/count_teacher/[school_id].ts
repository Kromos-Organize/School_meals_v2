import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios
      .get(`http://localhost:5001/user/count_employee/?school_id=${req.query.school_id}`, {
        headers: req.headers,
      })
      .then(res => res.data)

    res.status(200).json(response)
  } catch (error: any) {
    res.status(error.response.status).send(error)
  }
}

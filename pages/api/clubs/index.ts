  
import { NextApiRequest, NextApiResponse } from 'next'
import { clubArrayData } from '../../../src/utils/club-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(clubArrayData)) {
      throw new Error(`Cannot find groups data`)
    }

    res.status(200).json(clubArrayData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
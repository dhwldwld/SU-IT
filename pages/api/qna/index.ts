import { NextApiRequest, NextApiResponse } from 'next'
import { QnAData } from '../../../src/utils/QnA-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(QnAData)) {
      throw new Error(`Cannot find groups data`)
    }

    res.status(200).json(QnAData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
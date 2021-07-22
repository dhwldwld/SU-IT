  
import { NextApiRequest, NextApiResponse } from 'next'
import { detailData } from '../../../src/utils/Detail-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (Array.isArray(detailData)) {
      throw new Error(`Cannot find detail data`)
    }

    res.status(200).json(detailData)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
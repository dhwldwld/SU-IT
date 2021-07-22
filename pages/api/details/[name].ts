import { NextApiRequest, NextApiResponse } from 'next'
import { detailData } from '../../../src/utils/Detail-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name } = _req.query;
    
    const detail = detailData[name as string];

    if (!Array.isArray(detail)) {
      res.status(200).json(detail)
      return;
    }
    throw new Error(`Cannot find ${name} detail data`)

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
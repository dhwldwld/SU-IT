import { NextApiRequest, NextApiResponse } from 'next'
import { clubData } from '../../../src/utils/club-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = _req.query;
    
    const club = clubData[id as string];

    if (!Array.isArray(club)) {
      res.status(200).json(club)
      return;
    }
    throw new Error(`Cannot find ${id} club data`)

  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
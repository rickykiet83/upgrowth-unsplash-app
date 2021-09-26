// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Photo } from '@models/photo.model';
import { PhotoService } from '@services/photo.service';

const photoService = new PhotoService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Photo[]>
) {
  const { count, page, query } = req.query;

  try {
    const response = await photoService.getRandomAsync(+count, +page, query);

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }

}

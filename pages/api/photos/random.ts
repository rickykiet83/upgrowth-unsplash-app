// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Photo } from './../../../models/photo.model';
import UnsplashService from '../../../services/unsplash.service';

const unsplashService = new UnsplashService();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Photo[]>
) {
  const { count, page, query } = req.query;

  try {
    const response = await unsplashService.getRandomAsync(query, +count, +page);

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }

}

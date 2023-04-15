import { Repository } from 'typeorm';
import { ProdImage } from '../model/prodImage';

export interface ImageRepository extends Repository<ProdImage> {}
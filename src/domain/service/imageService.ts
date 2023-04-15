import { ImageDTO } from "../../dto/imageDTO";
import { ProdImage } from "../model/prodImage";
import { ImageRepository } from "../repository/imageRepository";
import { FileStorageService } from "./fileStorageService";

export class ImageService {
  private filename: string;

  constructor(
    filename: string,
    private readonly service: FileStorageService,
    private readonly repository: ImageRepository
  ) {
    this.filename =filename
  }

  async getImageProduct(): Promise<ImageDTO[]> {
    const p: ProdImage[] = await this.repository.find();
    const iDto: ImageDTO[] = [];
    for (const pd of p) {
      iDto.push(pd.toDto());
    }
    return iDto;
  }

  // async addImage(image: Resource): Promise<Resource> {
  // return await this.service.loadFileAsResource(this.filename);
  // }
}

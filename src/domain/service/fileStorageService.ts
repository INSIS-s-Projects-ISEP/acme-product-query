import { Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";
import {FileStorageProperties} from "../../property/fileStorageProperties"
import { FileStorageException } from "../../exception/fileStorageException";

@Injectable()
export class FileStorageService {
  private fileStorageLocation: string;

  constructor(private fileStorageProperties: FileStorageProperties) {
    this.fileStorageLocation = path.join(__dirname, '..', this.fileStorageProperties.getUploadDir());
    try {
      fs.mkdirSync(this.fileStorageLocation, { recursive: true });
    } catch (ex) {
      throw new FileStorageException("Could not create the directory where the uploaded files will be stored.");
    }
  }


  public storeFile(file: any): string {
    // Normalize file name
    const fileName = path.basename(file.originalname);  
      // Check if the file's name contains invalid characters
      if (fileName.includes('..')) {
        throw new FileStorageException(`Sorry! Filename contains invalid path sequence ${fileName}`);
      }
  
      // Copy file to the target location (Replacing existing file with the same name)
      try {
      const targetLocation = path.join(this.fileStorageLocation, fileName);
      fs.writeFileSync(targetLocation, file.buffer, { flag: 'w' });
  
      return fileName;
    } catch (ex) {
      throw new FileStorageException(`Could not store file, Please try again!`);
    }
  }


//   public loadFileAsResource(fileName: string): void {
//     try {
//     const filePath = this.fileStorageLocation.resolve(fileName).normalize();
//     const resource = new Resource(createInterface(Readable.from(createReadStream(filePath.toString()))));
//     if ( resource.exists()) {
//     return resource;
//     } else {
//     throw new MyFileNotFoundException("File not found " + fileName);
//     }
//     } catch (error) {
//     throw new MyFileNotFoundException("File not found " + fileName, error);
//     }
    
//   }

  
}

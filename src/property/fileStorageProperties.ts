export class FileStorageProperties {

    private uploadDir: string;

    constructor(uploadDir: string){
        this.uploadDir = uploadDir;
    }

    public getUploadDir(): string {
        return this.uploadDir;
    }

    public setUploadDir(uploadDir: string): void {
        this.uploadDir = uploadDir;
    }
}

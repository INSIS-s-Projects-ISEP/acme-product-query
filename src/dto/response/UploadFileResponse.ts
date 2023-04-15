export class UploadFileResponse {
    private fileName: string;
    public static fileDownloadUri: string;
    private fileType: string;
    private size: number;

    constructor(fileName: string, fileDownloadUri: string, fileType: string, size: number) {
        this.fileName = fileName;
        UploadFileResponse.fileDownloadUri = fileDownloadUri;
        this.fileType = fileType;
        this.size = size;
    }

    public getFileName(): string {
        return this.fileName;
    }

    public setFileName(fileName: string): void {
        this.fileName = fileName;
    }

    public getFileDownloadUri(): string {
        return UploadFileResponse.fileDownloadUri;
    }

    public setFileDownloadUri(fileDownloadUri: string): void {
        UploadFileResponse.fileDownloadUri = fileDownloadUri;
    }

    public getFileType(): string {
        return this.fileType;
    }

    public setFileType(fileType: string): void {
        this.fileType = fileType;
    }

    public getSize(): number {
        return this.size;
    }

    public setSize(size: number): void {
        this.size = size;
    }
}

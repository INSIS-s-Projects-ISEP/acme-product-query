export declare class UploadFileResponse {
    private fileName;
    static fileDownloadUri: string;
    private fileType;
    private size;
    constructor(fileName: string, fileDownloadUri: string, fileType: string, size: number);
    getFileName(): string;
    setFileName(fileName: string): void;
    getFileDownloadUri(): string;
    setFileDownloadUri(fileDownloadUri: string): void;
    getFileType(): string;
    setFileType(fileType: string): void;
    getSize(): number;
    setSize(size: number): void;
}

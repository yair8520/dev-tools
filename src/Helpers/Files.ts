interface IFile {
    nameOfFile?: string;
    data: string;
}
export const downloadFile = ({ nameOfFile, data }: IFile) => {
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "dev-tools " + nameOfFile;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
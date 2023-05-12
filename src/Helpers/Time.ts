

export const getTime = () => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    return date.toLocaleDateString('he-IL', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    });
}
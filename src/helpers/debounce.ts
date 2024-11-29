export function debounce<T extends Function>(cb: T, wait = 500): (...args: any[]) => Promise<any> {
    let timeout: number = 0;

    let callable = (...args: any[]): Promise<any> => {
        return new Promise((resolve) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const result = cb(...args);
                resolve(result);
            }, wait);
        });
    };

    return callable;
}

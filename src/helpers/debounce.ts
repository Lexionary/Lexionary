export function debounce<T extends Function>(cb: T, wait = 500): T {
    let timeout: number = 0;

    let callable = (...args: any): void => {
        clearTimeout(timeout);
        timeout = setTimeout(() => cb(...args), wait);
    };

    return <T>(<any>callable);
}

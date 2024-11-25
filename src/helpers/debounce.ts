export function debounce<T extends Function>(cb: T, wait = 500) {
  let timeout = 0;

  let callable = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), wait);
  };

  return <T>(<any>callable);
}

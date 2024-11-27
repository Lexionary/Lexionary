import { customRef, type Ref } from "vue";

export function useDebouncedRef<T>(value: T, delay: number = 200): Ref<T, T> {
    let timeout: number | null = null;

    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                if (timeout) {
                    clearTimeout(timeout);
                }

                timeout = setTimeout(() => {
                    value = newValue;
                    trigger();
                }, delay);
            },
        };
    });
}

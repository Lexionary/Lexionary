const app = document.getElementById("app")!;

function classBasedAnimation(className: string, duration: number): void {
    app.classList.add(className);

    setTimeout(() => {
        app.classList.remove(className);
        // app.offsetHeight; // Uncomment this if animation is not triggered. See: https://stackoverflow.com/a/50612462/16865129
    }, duration);
}

export function indigo(): void {
    return classBasedAnimation("indigo", 5000);
}

export function purple(): void {
    return classBasedAnimation("purple", 5000);
}

export function blur(): void {
    return classBasedAnimation("blur", 5000);
}

const app = document.getElementById("app")!;

function classBasedAnimation(className: string, duration: number): void {
    app.classList.add(className);

    setTimeout(() => {
        app.classList.remove(className);
        // app.offsetHeight; // Uncomment this if animation is not triggered. See: https://stackoverflow.com/a/50612462/16865129
    }, duration);
}

export function barrelRoll(): void {
    return classBasedAnimation("barrel-roll", 5000);
}

export function flip(): void {
    return classBasedAnimation("flip", 2000);
}

export function spin(): void {
    return classBasedAnimation("spin", 2000);
}

export function red(): void {
    return classBasedAnimation("red", 2000);
}

export function orange(): void {
    return classBasedAnimation("orange", 2000);
}

export function yellow(): void {
    return classBasedAnimation("yellow", 2000);
}

export function green(): void {
    return classBasedAnimation("green", 2000);
}

export function blue(): void {
    return classBasedAnimation("blue", 2000);
}

export function indigo(): void {
    return classBasedAnimation("indigo", 2000);
}

export function purple(): void {
    return classBasedAnimation("purple", 2000);
}

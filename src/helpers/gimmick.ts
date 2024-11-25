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
    return classBasedAnimation("flip", 5000);
}

export function spin(): void {
    return classBasedAnimation("spin", 5000);
}

export function red(): void {
    return classBasedAnimation("red", 5000);
}

export function orange(): void {
    return classBasedAnimation("orange", 5000);
}

export function yellow(): void {
    return classBasedAnimation("yellow", 5000);
}

export function green(): void {
    return classBasedAnimation("green", 5000);
}

export function blue(): void {
    return classBasedAnimation("blue", 5000);
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

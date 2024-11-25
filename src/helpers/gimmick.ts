const app = document.getElementById("app")!

function classBasedAnimation(className: string, duration: number): void {
  app.classList.add(className);

  setTimeout(() => {
    app.classList.remove(className);
    // app.offsetHeight; // Uncomment this if animation is not triggered. See: https://stackoverflow.com/a/50612462/16865129
  }, duration);
}

export function barrelRoll(): void {
  return classBasedAnimation("barrel-roll", 5000)
}

export function flip(): void {
  return classBasedAnimation("flip", 2000)
}

export function spin(): void {
  return classBasedAnimation("spin", 2000)
}

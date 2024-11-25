import { ref, watchEffect } from "vue"

export const darkMode = ref(document.documentElement.classList.contains("mode-hitam"));

watchEffect(() =>
  document.documentElement.classList[
    darkMode.value ? "add" : "remove"
  ]("mode-hitam")
)

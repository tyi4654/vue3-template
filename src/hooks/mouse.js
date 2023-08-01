import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
    const x = ref(0)
    const y = ref(0)

    function debounce(fn, wait) {
        let pre = 0
        return function () {
            let now = new Date().getTime()
            if (now - pre > wait) {
                pre = now
                fn.apply(this, arguments)
            }
        }
    }

    function updateMouse({ pageX, pageY }) {
        x.value = pageX
        y.value = pageY
    }

    onMounted(() => window.addEventListener('mousemove', debounce(updateMouse, 100)))
    onUnmounted(() => window.removeEventListener('mousemove', updateMouse))

    return { x, y }
}

import { defineComponent, onMounted, ref, h, defineEmits } from 'vue'
import { ElMessage } from 'element-plus'

export default defineComponent({
    name: 'Test demo',
    props: {
        title: String,
        content: String
    },
    setup(props, ctx) {
        console.log(props)
        console.log({ ...ctx })

        onMounted(() => {
            console.log()
        })

        const count = ref(1)

        const handleClick = () => {
            count.value++
            ElMessage.info(`count:${count.value}`)
            ctx.emit('custom-event', 'Custom event payload')
        }

        const htmlTemplate = h('div', [
            h('h2', 'Counter Component'),
            h('p', `Count: ${count.value}`),
            h('button', { onClick: handleClick }, 'Increment')
        ])

        return {
            count,
            handleClick,
            htmlTemplate
        }
    },
    render() {
        return this.htmlTemplate
    }
})

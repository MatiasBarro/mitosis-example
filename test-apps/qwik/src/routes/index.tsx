import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { AutoComplete, Greet, Todos } from '@mitosis-example/library-qwik'

export default component$(() => {
    return (
        <>
            <div>Welcome to Qwik</div>
            <AutoComplete />
            <Todos />
            <Greet />
        </>
    )
})

export const head: DocumentHead = {
    title: 'Welcome to Qwik',
    meta: [
        {
            name: 'description',
            content: 'Qwik site description',
        },
    ],
}

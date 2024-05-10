/* eslint-disable @builder.io/mitosis/jsx-callback-arg-name */
import { useStore } from '@builder.io/mitosis'

export default function Greet() {
    const state = useStore({
        name: 'Mati',
    })

    return (
        <div>
            <input
                value={state.name}
                onChange={(event) => (state.name = event.target.value)}
                placeholder="Your name"
            />
            <div>Hello, {state.name}!</div>
        </div>
    )
}

import { createGlobalStyle } from 'styled-components'

export const Base = createGlobalStyle `
    html, body {
        background-color: var(--color-base);
        font-size: var(--size-base);
        color: var(--color-first);
        min-width: 300px;
    }

    body {
        height: 100%;
        max-width: 100%;
        position: relative;
        
    }
`
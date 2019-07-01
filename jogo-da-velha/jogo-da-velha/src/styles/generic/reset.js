import { createGlobalStyle } from 'styled-components'


export const Reset = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        border: none;
    }
    ol, ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

`
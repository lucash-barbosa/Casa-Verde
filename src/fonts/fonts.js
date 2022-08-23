import { createGlobalStyle } from 'styled-components'

import ElsieSwashCapsWoff from './elsie-swash-caps-regular.woff'
import ElsieSwashCapsWoff2 from './elsie-swash-caps-regular.woff2'

export default createGlobalStyle`
    @font-face {
      font-family: 'Elsie Swash Caps', cursive;
      src: local('Elsie Swash Caps'), local('ElsieSwashCaps'),
      url(${ElsieSwashCapsWoff}) format('woff'),
      url(${ElsieSwashCapsWoff2}) format('woff2');
      font-weight: 900;
      font-style: normal;
      font-size: 82px
    }
`
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import ElsieSwashCapsWoff from './fonts/elsie-swash-caps-regular.woff'
import ElsieSwashCapsWoff2 from './fonts/elsie-swash-caps-regular.woff2'

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

export const Titulo = styled.h2`
	font-size: 22px;
  color: rgba(32, 32, 32, .5);
`

export const Subtitulo = styled.h3`
	font-family: Elsie Swash Caps;
	font-size: 41px;
	font-weight: 900;
	margin: .25em 0;

	@media screen and (min-width: 768px) {
		font-size: 82px;
		
	}
`
import styled from 'styled-components'
import GlobalFonts from 'globalStyles/globalStyles'

const Erro = styled.h2`
  font-family: Elsie Swash Caps;
  font-size: 200px;
  font-weight: 900;
	align-self: center;
`

const Wrapper = styled.div`
	padding-top: 10rem; 
	text-align: center;
	height: 90vh;
`

export default function NotFoundPage () {

	return (
		<Wrapper>
			<GlobalFonts />
			<Erro>404</Erro>
			<p>Página não foi encontrada</p>
		</Wrapper>
	)
}
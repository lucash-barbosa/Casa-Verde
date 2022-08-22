import  logo  from 'assets/logo.svg'
import logoSmall from 'assets/logo-sm.svg'
import styled from 'styled-components'

const Logo = styled.img`
	display: none;

	@media screen and (min-width: 1024px), (max-width: 728px){
		display: block
	}
`

const LogoSmall = styled.img`
	display: block;

	@media screen and (min-width: 1024px), (max-width: 728px){
		display: none
	}
`

const Cabecalho = styled.nav`
	background-color: transparent;
	display: flex;
	justify-content: space-around;
	margin: 1em 0;
	align-items: center;
	
`

const Navegacao = styled.ul`
	display: flex;
  padding: 0;

	a {
		color: #202020;
    line-height: 20px;
    font-weight: 600;
    margin: 0 1em;
	}
`

export default function Menu() {
	return (
		<Cabecalho>
			<Logo src={logo} alt="Logo da Casa Verde" />
			<LogoSmall src={logoSmall} alt="Logo da Casa Verde" />
			<Navegacao>
				<li><a href="#">Como fazer</a>/</li>
				<li><a href="#">Ofertas</a>/</li>
				<li><a href="#">Depoimentos</a>/</li>
				<li><a href="#">Vídeos</a>/</li>
				<li><a href="#">Meu Carrinho</a></li>
			</Navegacao>
		</Cabecalho>
	)
}
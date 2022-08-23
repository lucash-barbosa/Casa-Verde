import logo from 'assets/logo.svg'
import logoSmall from 'assets/logo-sm.svg'
import styled from 'styled-components'

const Logo = styled.img`
  display: none;
  margin: 1em auto;
  width: 60vw;

  @media screen and (max-width: 768px), (min-width: 1024px){
    display: block;
  }

	@media screen and (min-width: 1024px){
		display: block;
		width: auto;
		margin: 0;
	}
`

const LogoSmall = styled.img`
  display: block;

  @media screen and (max-width: 768px), (min-width: 1024px){
    display: none;
  }
`

const Cabecalho = styled.nav`

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin: 1em 0;
    align-items: center;
  }
`

const Navegacao = styled.ul`
  padding: 0;
  display: flex;

	@media screen and (max-width: 768px){
		margin-top: 2rem;
		flex-wrap: wrap;
		justify-content: center
	}

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
				<li>
					<a href="#">Como fazer</a>/
				</li>
				<li>
					<a href="#">Ofertas</a>/
				</li>
				<li>
					<a href="#">Depoimentos</a>/
				</li>
				<li>
					<a href="#">Vídeos</a>/
				</li>
				<li>
					<a href="#">Meu Carrinho</a>
				</li>
			</Navegacao>
		</Cabecalho>
	)
}
/*
@media screen and (min-width: 768px){
	display: flex;
}
*/

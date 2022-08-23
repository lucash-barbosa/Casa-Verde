import styled from 'styled-components'

export const Logo = styled.img`
  display: none;
  margin: 1em auto;
  width: 60vw;

  @media screen and (max-width: 767px), (min-width: 1024px){
    display: block;
  }

	@media screen and (min-width: 1024px){
		display: block;
		width: auto;
		margin: 0;
	}
`

export const LogoSmall = styled.img`
  display: block;

  @media screen and (max-width: 767px), (min-width: 1024px){
    display: none;
  }
`

export const Cabecalho = styled.nav`

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    margin: 1em 0;
    align-items: center;
  }
`

export const Navegacao = styled.ul`
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
import styled from 'styled-components'
import GlobalFonts from 'fonts/fonts'
import mail from 'assets/mail.svg'
import plata1 from 'assets/planta-1.png'


const AssinaturaNewsLetterWrapper = styled.section`
	padding: 7rem 0 15rem;
	
	@media screen and (min-width: 1024px){
		padding: 7rem 0 15rem;
		margin-left: 20%;
		background-image: url(${plata1});
		background-repeat: no-repeat;
		background-position: 70% -50px;
		background-size: contain;
	}

	@media screen and (min-width: 1200px){
		background-position: 50% -50px;
	}
`

const ConteudoWrapper = styled.div`
	text-align: center;
	margin: 0 auto;

	@media screen and (min-width: 1024px) {
		margin-left: 5%; 
		text-align: left;
		width: min-content;
	}
`

const Titulo = styled.h2`
	font-size: 22px;
  color: rgba(32, 32, 32, .5);
`

const Subtitulo = styled.h3`
	font-family: Elsie Swash Caps;
	font-size: 41px;
	font-weight: 900;
	margin: .25em 0;

	@media screen and (min-width: 768px) {
		font-size: 82px;
		
	}
`

const Paragrafo = styled.p`
	color: rgba(32, 32, 32, 50%);
	margin: 0 auto;
	margin-bottom: 1.5em;
	width: 80%;

	@media screen and (min-width: 1024px) {
		margin: 0 0 1.5em 0;
		width: 80%;
	}
`

const AssinaturaWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;


	@media screen and (min-width: 1024px) {
		width: 27vw;
		min-width: fit-content;
		height: 4.3rem;
		background-color: #fff;
		flex-wrap: nowrap;
		gap: 0;
	}
	
	input {
		width: 70%;
		padding: 1.2em 0 1.2em 1em;
		border: none;
		box-shadow: 0 -.1em 3em rgba(32, 32, 32, 15%);
		color: #6d6d6d;

		@media screen and (min-width: 768px) {
			width: 80%;
			height: 100%;
			padding-left: 4em;
			background-image: url(${mail});
			background-repeat: no-repeat;
			background-position: 1em;
		}

		&::placeholder {
			opacity: 0.3;
		}	
	}

	button {
		background-color: #FFCB47;
		width: 50%;
		height: 4em;
		border: none;
		box-shadow: 0 -.1em 3em rgba(255, 203, 71, 50%);
		color: #FFF;

		@media screen and (min-width: 1024px) {
			width: 40%;
			height: 100%;
		}
	}
	
`



export default function AssinaturaNewsletter () {
	return (
		<AssinaturaNewsLetterWrapper>
			<GlobalFonts />
			<ConteudoWrapper>
				<Titulo>Sua casa com as</Titulo>
				<Subtitulo>melhores plantas</Subtitulo>

				<Paragrafo>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Paragrafo>

				<AssinaturaWrapper>
					<input type="email" placeholder='Insira seu e-mail' />
					<button type='submit'>Assinar newsletter</button>
				</AssinaturaWrapper>
			</ConteudoWrapper>
		</AssinaturaNewsLetterWrapper>
	)
}
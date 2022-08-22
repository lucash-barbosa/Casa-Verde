import styled from 'styled-components'
import mail from 'assets/mail.svg'
import plata1 from 'assets/planta-1.png'

const AssinaturaNewsLetterWrapper = styled.section`
	padding: 7rem 0 15rem;
  margin-left: 20%;
  background-image: url(${plata1});
  background-repeat: no-repeat;
  background-position: 50% -50px;
  background-size: contain;
`

const ConteudoWrapper = styled.div`
	text-align: left;
  width: 40%;
`

const Titulo = styled.h2`
	font-size: 22px;
  color: $black-low-oppacity;
`

const Subtitulo = styled.h3`
	font-family: $font-elsie;
	font-size: 82px;
	font-weight: 900;
	margin: .25em 0;
`

const Paragrafo = styled.p`
	color: rgba(32, 32, 32, 50%);
	margin-bottom: 1.5em;
	width: 80%;
`

const AssinaturaWrapper = styled.div`
  background-color: #fff;

	input {
		width: 25em;
		padding: 1.5em 0;
		border: none;
		box-shadow: 0 -.1em 3em rgba(32, 32, 32, 15%);
		background-color: #fff;
		padding-left: 4em;
		background-image: url(${mail});
		background-repeat: no-repeat;
		background-position: 1em;
		color: #6d6d6d;

		&::placeholder {
			opacity: 0.3;
		}	
	}

	button {
		background-color: #FFCB47;
      width: 11em;
      height: 4em;
      border: none;
      box-shadow: 0 -.1em 3em rgba(255, 203, 71, 50%);
      color: #FFF;
	}
	
`



export default function AssinaturaNewsletter () {
	return (
		<AssinaturaNewsLetterWrapper>
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
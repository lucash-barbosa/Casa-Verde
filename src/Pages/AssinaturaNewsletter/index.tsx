import {
	AssinaturaNewsLetterWrapper,
	ConteudoWrapper,
	Titulo,
	Subtitulo,
	Paragrafo,
	AssinaturaWrapper
} from './styled'
import GlobalFonts from 'fonts/fonts'


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
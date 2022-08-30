import planta2 from 'assets/planta-2.png'
import { Container, FigureContainer, Icone,  Item,  Paragrafo, Subtitulo, Titulo, Wrapper } from './styled'

export default function ComoFazer() {
	return (
		<Container>
			<FigureContainer>
				<img src={planta2} alt="Imagem de planta" />
			</FigureContainer>
			<Wrapper>
				<Titulo>Como conseguir</Titulo>
				<Subtitulo>minha planta</Subtitulo>

				<Item>
					<Icone />
					<Paragrafo>Escolha suas plantas</Paragrafo>
				</Item>
				<Item>
					<Icone />
					<Paragrafo>Faça seu pedido</Paragrafo>
				</Item>
				<Item>
					<Icone />
					<Paragrafo>Aguarde na sua casa</Paragrafo>
				</Item>
			</Wrapper>
		</Container>
	)
}

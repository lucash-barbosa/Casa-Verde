import { Subtitulo, Titulo } from 'globalStyles/globalStyles'
import { Ofertas } from 'interfaces/ofertas'
import { useEffect, useState } from 'react'
import { Botao, Container, ContainerOfertas, FigureImg, Filtros, Icone, NomePlanta, Preco, Wrapper } from './styled'

export default function NossasPlantas () {

	const [oferta, setOferta] = useState<Ofertas[]>([])

	const url = 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw'
  
	useEffect(() => {
		fetch(url)
			.then(resposta => resposta.json())
			.then((dados: Ofertas[]) => {
				setOferta(dados)
			})
			.catch(erro => console.log(erro))
	}, [])

	return (
		<ContainerOfertas id='nossasPlantas'>
			<Titulo>Conheça as</Titulo>
			<Subtitulo>nossas plantas</Subtitulo>
			<Filtros>
				<input id='ordenar' type="checkbox" />
				<label htmlFor='ordenar'>Ordenar<span></span></label>
			</Filtros>
			<Container>
				{oferta.map((ofertas,index) => {
					const img = `/assets/${ofertas.img}.png`
					return (
						<Wrapper key={index}>
							<FigureImg>
								<img src={img} alt={ofertas.name} />
							</FigureImg>
							<ul>
								<NomePlanta>{ofertas.name}</NomePlanta>
								<Preco>R$ {ofertas.preco.toPrecision(4)}</Preco>
								<Botao><button>Comprar</button><Icone /></Botao>
							</ul>
						</Wrapper>
					)
				})}
			</Container>
		</ContainerOfertas>
	)
}
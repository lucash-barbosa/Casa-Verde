import { Subtitulo, Titulo } from 'globalStyles/globalStyles'
import { Ofertas } from 'interfaces/ofertas'
import { useEffect, useState } from 'react'
import { Botao, Container, ContainerOfertas, FigureImg, Filtros, Icone, NomePlanta, Preco, SelecionaPreco, Wrapper } from './styled'

export default function NossasPlantas () {

	const [checkNome, setCheckNome] = useState<boolean>(false)
	const [checkPreco, setCheckPreco] = useState<boolean>(false)

	const [minValue, setMinValue] = useState('0.00')
	const [maxValue, setMaxValue] = useState('0.00')

	const [oferta, setOferta] = useState<Ofertas[]>([])
	const [filtro, setFiltro] = useState<Ofertas[]>([])

	const url = 'https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw'
  
	useEffect(() => {
		fetch(url)
			.then(resposta => resposta.json())
			.then((dados: Ofertas[]) => {
				setOferta(dados)
				setFiltro(dados)
			})
			.catch(erro => console.log(erro))
	}, [])

	const handleChekNome = () => {
		if (checkNome === true) {
			setFiltro(filtro.sort((a, b) => a.name > b.name ? 1 : -1))
		}
		else {
			setFiltro(filtro.sort((a, b) => a.name < b.name ? 1 : -1))
		}
	}

	const handleChekPreco = () => {
		if (checkPreco === true) {
			setFiltro(filtro.sort((a, b) => a.preco > b.preco ? 1 : -1))
		}
		else {
			setFiltro(filtro.sort((a, b) => a.preco < b.preco ? 1 : -1))
		}
	}

	const filtraPreco = (event: any) => {
		event.preventDefault()
		setFiltro(oferta.filter((value) => {
			if (parseFloat(minValue) == 0) {
				return value.preco <= parseFloat(maxValue)
			}
			if (parseFloat(maxValue) == 0) {
				return value.preco >= parseFloat(minValue)
			} else {
				return value.preco >= parseFloat(minValue) && value.preco <= parseFloat(maxValue)
			}
		}))
	}

	return (
		<ContainerOfertas id='nossasPlantas'>
			<Titulo>Conheça as</Titulo>
			<Subtitulo>nossas plantas</Subtitulo>
			<Filtros>
				<div>
					<input id='ordenarNome' type="checkbox" onChange={() => {
						setCheckNome(!checkNome)
						handleChekNome()
					}}/>
					<label htmlFor='ordenarNome'>Ordenar nome<span></span></label>
					
					<input id='ordenarPreco' type="checkbox" onChange={() => {
						setCheckPreco(!checkPreco)
						handleChekPreco()
					}}/>
					<label htmlFor='ordenarPreco'>Ordenar preço<span></span></label>
				</div>

				<SelecionaPreco>
					<div>
						<input 
							type="number" 
							onChange={(value) => {
								setMinValue(parseFloat(value.target.value).toFixed(2))
							}} 
							value={minValue} 
						/> 
						<label htmlFor="precoMin">Preço min</label>
					</div>

					<div>
						<input 
							type="number" 
							id='precoMax'
							onChange={(value) => {
								setMaxValue(parseFloat(value.target.value).toFixed(2))
							}} 
							value={maxValue}
						/> 
						<label htmlFor="precoMax">Preço max</label>
					</div>

					<button onClick={filtraPreco} >Filtrar</button>
				</SelecionaPreco>
			</Filtros>
			<Container>
				{filtro.map((ofertas,index) => {
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
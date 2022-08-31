import logo from 'assets/logo.svg'
import logoSmall from 'assets/logo-sm.svg'
import {Cabecalho, Logo, LogoSmall, Navegacao} from './styled'
import { Link } from 'react-router-dom'

export default function Menu() {
	return (
		<Cabecalho>
			<Link to='/'>
				<Logo src={logo} alt="Logo da Casa Verde" />
				<LogoSmall src={logoSmall} alt="Logo da Casa Verde" />
			</Link>
			<Navegacao>
				<li>
					<a href="#comoConseguir">Como fazer</a>/
				</li>
				<li>
					<a href="#nossasPlantas">Nossas Plantas</a>/
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
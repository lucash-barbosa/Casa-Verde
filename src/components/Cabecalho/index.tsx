import logo from 'assets/logo.svg'
import logoSmall from 'assets/logo-sm.svg'
import {Cabecalho, Logo, LogoSmall, Navegacao} from './styled'

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

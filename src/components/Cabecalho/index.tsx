import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './Cabecalho.module.sass'

export default function Cabecalho() {
	return (
		<nav className={styles.cabecalho}>
			<Logo />
			<ul className={styles.navegacao}>
				<li><a href="#" className={styles.navegacao__link}>Como fazer</a></li>
				<li className={styles.navegacao__item}>/</li>
				<li><a href="#" className={styles.navegacao__link}></a>Ofertas</li>
				<li className={styles.navegacao__item}>/</li>
				<li><a href="#" className={styles.navegacao__link}></a>Depoimentos</li>
				<li className={styles.navegacao__item}>/</li>
				<li><a href="#" className={styles.navegacao__link}></a>Vídeos</li>
				<li className={styles.navegacao__item}>/</li>
				<li><a href="#" className={styles.navegacao__link}></a>Meu Carrinho</li>
			</ul>
		</nav>
	)
}
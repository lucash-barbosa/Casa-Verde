import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './Cabecalho.module.sass'

export default function Menu() {
	return (
		<nav className={styles.menu}>
			<Logo />
			<ul className={styles.navegacao}>
				<li><a href="#" className={styles.navegacao__link}>Como fazer</a>/</li>
				<li><a href="#" className={styles.navegacao__link}>Ofertas</a>/</li>
				<li><a href="#" className={styles.navegacao__link}>Depoimentos</a>/</li>
				<li><a href="#" className={styles.navegacao__link}>Vídeos</a>/</li>
				<li><a href="#" className={styles.navegacao__link}>Meu Carrinho</a></li>
			</ul>
		</nav>
	)
}
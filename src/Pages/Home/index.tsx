import styles from './Home.module.sass'

export default function Home () {
	return (
		<section className={styles.destaque}>
			<div className={styles['conteudo-destaque']}>
				<h3 className={styles.subtitulo}>Sua casa com as</h3>
				<h2 className={styles['subtitulo-destaque']}>melhores plantas</h2>

				<p className={styles.paragrafo}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>

				<div className={styles.assinar}>
					<input className={styles.campo__email} type="email" placeholder='Insira seu e-mail' />
					<button type='submit' className={styles.assinar__btn} >Assinar newsletter</button>
				</div>
			</div>
		</section>
	)
}
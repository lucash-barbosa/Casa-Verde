import {
	AssinaturaNewsLetterWrapper,
	ConteudoWrapper,
	Titulo,
	Subtitulo,
	Paragrafo,
	AssinaturaWrapper,
} from './styled'
import GlobalFonts from 'fonts/fonts'
import React, { useState } from 'react'

export default function AssinaturaNewsletter() {
	const [value, setValue] = useState('')

	const validaEmail = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault()
		const regExp = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.?([a-z]+)?$/i
		
		if (regExp.test(value)) {
			alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${value}`)
		}
		else {
			alert(`O email ${value} não é valido`)
		}
	}

	return (
		<AssinaturaNewsLetterWrapper>
			<GlobalFonts />
			<ConteudoWrapper>
				<Titulo>Sua casa com as</Titulo>
				<Subtitulo>melhores plantas</Subtitulo>

				<Paragrafo>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
				</Paragrafo>

				<AssinaturaWrapper onSubmit={validaEmail}>
					<input
						type="email"
						placeholder="Insira seu e-mail"
						value={value}
						onChange={(evento) => setValue(evento.target.value)}
					/>
					<button type="submit">Assinar newsletter</button>
				</AssinaturaWrapper>
			</ConteudoWrapper>
		</AssinaturaNewsLetterWrapper>
	)
}

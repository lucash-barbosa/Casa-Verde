import React, { useState } from 'react'
import {
	AssinaturaNewsLetterWrapper,
	ConteudoWrapper,
	Paragrafo,
	AssinaturaWrapper,
} from './styled'
import emailjs from '@emailjs/browser'
import { Subtitulo, Titulo } from 'globalStyles/globalStyles'

export default function AssinaturaNewsletter() {
	
	const [value, setValue] = useState('')

	function enviaEmail (evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault()

		const ServiceId = process.env.REACT_APP_SERVICE_ID
		const templateId = process.env.REACT_APP_TEMPLATE_ID 
		const PublicKey = process.env.REACT_APP_PUBLIC_KEY

		if (ServiceId !== undefined && templateId !== undefined && PublicKey !== undefined) {
			emailjs.sendForm(ServiceId, templateId, evento.currentTarget, PublicKey) 
				.then(() => {
					console.log('mensagem enviada com susseso!')
				}) 
				.catch (erro => 
					console.log(erro))
		}
	}

	const verificaEmail = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault()
		
		const regExp = /^[a-z0-9.]+@[a-z0-9]+[mail]+.[a-z]+.?([a-z]+)?$/i

		if (regExp.test(value)) {
			alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${value}`)
			enviaEmail(evento)
		} else {
			alert(`O email ${value} não é valido`)
		}
	}

	return (
		<AssinaturaNewsLetterWrapper>
			<ConteudoWrapper>
				<Titulo>Sua casa com as</Titulo>
				<Subtitulo>melhores plantas</Subtitulo>

				<Paragrafo>
						Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
						torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
						e assine nossa newsletter para saber das novidades da marca.
				</Paragrafo>

				<AssinaturaWrapper onSubmit={verificaEmail}>
					<input
						name="email"
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

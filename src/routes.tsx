import AssinaturaNewsletter from 'Pages/AssinaturaNewsletter'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Cabecalho'

function App() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route index element={<AssinaturaNewsletter />} />
			</Routes>
		</Router>
	)
}

export default App

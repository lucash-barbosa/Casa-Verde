import NotFoundPage from 'components/404'
import Home from 'Pages/Home/'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Cabecalho'

function App() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</Router>
	)
}

export default App

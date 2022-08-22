import Home from 'Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components/Cabecalho'

function App() {
	return (
		<Router>
			<Menu />
			<Routes>
				<Route index element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App

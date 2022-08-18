import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cabecalho from './components/Cabecalho'

function App () {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Cabecalho />} />
			</Routes>
		</Router>
	)
}

export default App
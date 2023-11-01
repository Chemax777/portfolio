import { useEffect, useState } from "react"
import PortfolioPage from "../../pages/portfolio-page"
import './app.css'
import Loader from "../loader"

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
    }, [])
    return (
        loading ? <Loader/> : <PortfolioPage></PortfolioPage>
    )
}

export default App
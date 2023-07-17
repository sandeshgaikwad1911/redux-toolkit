import Products from "../components/products/Products"
import './Home.css'

const Home = () => {
  return (
    <div className="home">
        
        <div className="product-component">
            <Products/>
        </div>

    </div>
  )
}

export default Home
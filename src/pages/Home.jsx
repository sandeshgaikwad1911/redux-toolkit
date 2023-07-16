import Products from "../components/products/Products"

const Home = () => {
  return (
    <div style={{backgroundColor: 'black', color: 'white', padding: '0 2rem'}}>
        
        <div className="product-component">
                <Products/>
        </div>

    </div>
  )
}

export default Home
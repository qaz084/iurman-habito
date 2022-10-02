
import Navbar from './components/navbar/Navbar';
import { Categories,ItemListContainer,CardProductsDetail  } from './components/products';
import Users from './data/users.json';
import ProductImage from './images/products/biker_01.jpg';
import ProductData from './data/productsDetails.json';

export default function App() {

  const {categories:productName, price:ProductPrice, stock:ProductQuantity}=ProductData[0];

  return (
    < >
      <Navbar/>
      <main>
        <ItemListContainer greetings={Users}/>
       
        <Categories />
        <CardProductsDetail img={ProductImage}
          productName={productName}
          productPrice={ProductPrice}
          productQuantity={ProductQuantity}
        />

      </main>
    </>
  );
}



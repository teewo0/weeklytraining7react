import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Button2 from './Button2';
import Card from './Card';
import UserCard from './UserCard';

function App() {
  const products = {
    title: '2050 Gucci Bag', 
    description: 'This bag na blast!',
    price: 50000
  };
  const handleProduct = () => {
    alert(products.title);
  };
  const user = {
    name: 'tejiri',
    age: 50,
    height: 180
  };

  return (
    <div className="App">
      {/* <Button text="Sign In"/>
      <Button text="Learn More"/>
      <Button text="Discover More"/>
      
      <Button2 text="Contact Us"/>
      <Button2 text="About Us"/> */}

      <Card myProducts={products} myClick={handleProduct} />
      <UserCard myUser={user}/>
    </div>
  );
}

export default App;

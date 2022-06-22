import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    
    <div>
      <Navbar />
      <Hero />
      <div className = 'cardList'>
        <Card 
          img = 'card-img1.png'
          rating = {5.0}
          reviewCount = {7}
          city = 'Karachi'
          price = {70000}
        />

        <Card 
          img = 'card-img2.png'
          rating = {4.0}
          reviewCount = {10}
          city = 'Lahore'
          price = {95000}
        />

        <Card 
          img = 'card-img3.png'
          rating = {4.6}
          reviewCount = {8}
          city = 'Islamabad'
          price = {120000}
        />

        <Card 
          img = 'card-img4.png'
          rating = {4.3}
          reviewCount = {15}
          city = 'Karachi'
          price = {150000}
        />

      </div>
      
    </div>
    
  );
}

export default App;

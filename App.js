import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./Data";
/*
<h1 className='hero--header' >Premium Experiences</h1>
        <p className='hero--text'>Select from unique {'&'} registered locations</p>
        */
function App() {

  const heroActivities = data.map(item => {
    return (
      <Hero 
      key = {item.id}
        img = {item.img}
        location = {item.location}
        title = {item.title}
        price = {item.price}
        openSpots = {item.openSpots}
        instructor = {item.instructor}
      />
    )
  }) 

  





  return (
    
    <div>
      
      <Navbar />

      <div className="hero--list">
        {heroActivities}
      </div>
      
       

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

        <Card 
          img = 'card-img2.png'
          rating = {4.0}
          reviewCount = {10}
          city = 'Lahore'
          price = {95000}
        />

        <Card 
          img = 'card-img2.png'
          rating = {4.0}
          reviewCount = {10}
          city = 'Lahore'
          price = {95000}
        />

<Card 
          img = 'card-img4.png'
          rating = {4.3}
          reviewCount = {15}
          city = 'Karachi'
          price = {150000}
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

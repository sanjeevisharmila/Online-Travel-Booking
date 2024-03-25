import React from 'react';
//import './home.css';
import Navbar from '../components/navbar/navbar';
import Header from '../components/header/header';
import Featured from '../components/featured/featured';
import Propertylist from '../components/propertylist/propertylist';
import Featuredproperties from '../components/featuredproperties/featuredproperties';
import Maillist from '../maillist/maillist';
import Footer from '../components/footer/footer';
const Home = () =>{
    return(
      <div>
        <Navbar />
        <Header />
        <div className="homecontainer">
          <Featured />
          <h1 className='hometitle'>Browse whatever you want by properties</h1>
          <Propertylist />
          <h1>Home guests love</h1>
          <Featuredproperties />
          <Maillist />
          <Footer />
        </div>
      </div>
    );
}

export default Home;
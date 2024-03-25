import React from "react";
import './searchitem.css';
const SearchItem = () =>{
    return(
      <div>
          <div className="searchitem">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZaDab-VAMpXZf3AD_DOcNAhi3H0aCVemyYw&usqp=CAU" className="siimg"/>
           <div className="sidesc">
             <h1 className="sititle">Tower street Apartments</h1>
             <span className="sidistance">500m from center</span>
              <span className="sitaxi">Free Airoprt Taxi</span>
               <span className="issubtitle">Studio Apartment  with Air Conditioning</span>
               <span className="sifeatures">Entire studio * 1 bathroom * 21msq 1 full bed</span>
                 <span className="sicancel">Free Cancellation</span>
                  <span className="sicancelsubtitile">You can cancel later,so lock in this great price today</span>
           </div>
           <div className="sidetails">
             <div className="sirating">
                 <span>Excellent</span>
                 <button>8.9</button>
             </div>
             <div className="sidetailtest">
                <span className="siprice">INR 76,000</span>

                <button className="sicheck">See availability</button>
             </div>
           </div>
           
        </div>
          <div className="searchitem">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAj-ql57dtZHtGXtlKNP7bW5JsRiBey4BhSg&usqp=CAU" className="siimg"/>
           <div className="sidesc">
             <h1 className="sititle">St Regis Hotels</h1>
             <span className="sidistance">267m from center</span>
              <span className="sitaxi">Free Airoprt Taxi</span>
               <span className="issubtitle">place  with joy and peaceful</span>
               <span className="sifeatures">2 bathroom * 23msq 1 full bed</span>
                 <span className="sicancel">Free Cancellation</span>
                  <span className="sicancelsubtitile">You can cancel later,so lock in this great price today</span>
           </div>
           <div className="sidetails">
             <div className="sirating">
                 <span>Excellent</span>
                 <button>8.8</button>
             </div>
             <div className="sidetailtest">
                <span className="siprice">INR 75,000</span>

                <button className="sicheck">See availability</button>
             </div>
           </div>
           
          </div>
             <div className="searchitem">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SW0RgEj4RVB-ea1Q9dsgFTn7xbQCQMOcwQ&usqp=CAU" className="siimg"/>
           <div className="sidesc">
             <h1 className="sititle">Ritz-Carlton</h1>
             <span className="sidistance">432m from center</span>
              <span className="sitaxi">Free Airoprt Taxi</span>
               <span className="issubtitle">Enjoy the day</span>
               <span className="sifeatures">1 bathroom * 21msq 1 full bed</span>
                 <span className="sicancel">Free Cancellation</span>
                  <span className="sicancelsubtitile">You can cancel later,so lock in this great price today</span>
           </div>
           <div className="sidetails">
             <div className="sirating">
                 <span>Excellent</span>
                 <button>8.8</button>
             </div>
             <div className="sidetailtest">
                <span className="siprice">INR 67,000</span>

                <button className="sicheck">See availability</button>
             </div>
           </div>
           
          </div>
             <div className="searchitem">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikG9rXdLDbp3I-1G8U-8myMpnqNLNQdQ09g&usqp=CAU" className="siimg"/>
           <div className="sidesc">
             <h1 className="sititle">Fountain Fun</h1>
             <span className="sidistance">675m from center</span>
              <span className="sitaxi">Free Airoprt Taxi</span>
               <span className="issubtitle">Choose a correct path</span>
               <span className="sifeatures">1 bathroom * 22msq 1 full bed</span>
                 <span className="sicancel">Free Cancellation</span>
                  <span className="sicancelsubtitile">You can cancel later,so lock in this great price today</span>
           </div>
           <div className="sidetails">
             <div className="sirating">
                 <span>Excellent</span>
                 <button>8.7</button>
             </div>
             <div className="sidetailtest">
                <span className="siprice">INR 54,000</span>

                <button className="sicheck">See availability</button>
             </div>
           </div>
           
          </div>
      </div>
      
        
    );
}
export default SearchItem;
import React from 'react';

import "./propertylist.css";
const Propertylist = () =>{
    
    return(
      <div className="plist">
        <div className="plistitem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBGjxBt28Z4XWIIsXbkrxpURvqRd48NmiMhQ&usqp=CAU" alt="" className="plimg"/>
            <div className="plisttitle h2">
                <h1>hotels</h1>
                <h2>233 hotels</h2>
                </div>
        </div>
        <div className="plistitem">
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLjcY1JLqNmhKScB4FjGnRzz6E-wooXVO0w&usqp=CAU" alt="" className="plimg"/>
            <div className="plisttitle h2">
                <h1>hotels</h1>
                <h2>233 hotels</h2>
                </div>
        </div>
        <div className="plistitem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHJarTNOswv1HjZWJRJ1B94kSiwg0fClzVA&usqp=CAU" alt="" className="plimg"/>
            <div className="plisttitle h2">
                <h1>Apartments</h1>
                <h2>233 hotels</h2>
                </div>
        </div>
        <div className="plistitem">
            <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AyqJtUmGXvLoE3Yb8LXTA-VkSIAbhxl8hQ&usqp=CAU" alt="" className="plimg"/>
            <div className="plisttitle h2">
                <h1>Resorts</h1>
                <h2>233 hotels</h2>
                </div>
        </div>
      </div>
    )
}
export default Propertylist;
import React,{useState} from 'react';
import Navbar from '../components/navbar/navbar'; 
import Header from '../components/header/header';
import SearchItem from '../components/searchitem/searchitem';
import { useLocation } from 'react-router-dom';
import {format} from 'date-fns';
import "./list.css";
import { DateRange } from 'react-date-range';

const List = () =>{
  const location=useLocation();
  const[destination,setDestination] =useState(location.state.destination);
  const[date,setDate] =useState(location.state.date);
   const[openDate,setOpenDate] =useState(false);
  const[options,setOptions] =useState(location.state.options);
    return(
     <div>
        <Navbar />
        <Header type="list" />
        <div className="listcontainer">
           <div className="listwrapper">
             <div className="listsearch">
                <h1 className="listtitle">Search</h1>
                 <div className="listitem">
                     <label>Destination</label>
                      <input type="text" />
                 </div>
                 <div className="listitem">
                     <label>Check in date</label>
                      <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startdate,"MM/dd/yyyy")} `}</span>
                     {openDate &&(<DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()}  ranges={date} />)}
                 </div>
                 <div className="listitem">
                   <label>Options</label>
                    <div className="listoptionitem">
                       <span className="listoptiontext">
                        Min price <small>per night</small>
                       </span>
                       <input type="number" className="listoptioninput" />
                    </div>
                     <div className="listoptionitem">
                       <span className="listoptiontext">
                        Min price <small>per night</small>
                       </span>
                       <input type="number" className="listoptioninput" />
                    </div>
                     <div className="listoptionitem">
                       <span className="listoptiontext">
                        Max price <small>per night</small>
                       </span>
                       <input type="number" className="listoptioninput" />
                    </div>
                     <div className="listoptionitem">
                       <span className="listoptiontext" >
                        Adults
                       </span>
                       <input type="number" className="listoptioninput" min={1} placeholder={options.adult} />
                    </div>
                     <div className="listoptionitem">
                       <span className="listoptiontext">
                        Children
                       </span>
                       <input type="number" className="listoptioninput" min={0} placeholder={options.children}/>
                    </div>
                    <div className="listoptionitem">
                       <span className="listoptiontext">
                        room
                       </span>
                       <input type="number" className="listoptioninput" min={1} placeholder={options.room} />
                    </div>
                 </div>
                 <button>Search</button>
             </div>
              <div className="listresult">
                  <SearchItem />
                   
           </div>
           </div>
        </div>
    </div>
    );
}
export default List;
import React, { useEffect, useState} from 'react'
import Fooddata from './FoodData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'
import {Link} from "react-router-dom";




function Search  ({detailz})  {

  

 
    const [fdata, setFdata] = useState(Fooddata);
    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);
    
    const [menuItems, setmenuItems] = useState(detailz);
 
    const handleFilterCategory = (category) => {
        const filteredData = Fooddata.filter((item) => {
          if (item.category === category) {
            return item;
          }
        });
    
        setCopyData(filteredData);
      };
     
      const handleFilterAllCategory = (category) => {
        const filteredData = Fooddata.filter((item) => {
          if (item.category != category) {
            return item;
          }
        });
    
        setCopyData(filteredData);
      };
      
    // const [filters, setFilters] = useState({
  
    //     category:"",
    //   });
     
      const handleInput = (field) => (event) => {
        const { value } = event.target;
    
        // setFilters({
        //   ...filters,
        //   [field]: value,
        // });
    
        switch (field) {
      
            case "category":
                handleFilterCategory(value);
              break;
         
         
          default:
            break;
        }
      };
    
      const AllInput = (field) => (event) => {
        const { value } = event.target;
    
        // setFilters({
        //   ...filters,
        //   [field]: value,
        // });
    
        switch (field) {
      
            case "All":
                handleFilterAllCategory(value);
              break;
         
         
          default:
            break;
        }
      };

    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopyData(fdata);
        } else {
            let storedata = fdata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    const zomatologo = "https://entrackr.com/wp-content/uploads/2019/02/zomato-1200x600.jpg"


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])
    const pathname = window.location.pathname;

    const url="/";
    
  
    return (
        <>
     
     
            <div className="container d-flex justify-content-between align-items-center">
            <Link to = {`/`} > 
                <img src={zomatologo} style={{ width: "2rem" ,height:"90px", position: "relative", left: "2%", cursor: "pointer" }} alt="" />
              
               
        </Link>
 
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
            </div>


   { url ===pathname ?
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search dish" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
            </Form>
            : <p></p> }

            <br></br>
            { url ===pathname ?    
<div>
{menuItems.map((category) => (
            <button 
            
            onClick={handleInput("category")}
            value={category} key={category}
            className={`bg-white border-2 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2 ${
                'bg-blue-500 text-black font-bold'
              }`}
              >
              {category}
              
            </button>
          ))}
          <button
          className="filter-btn"
          onClick={AllInput("All")}
    
          value ='All' 
         className="bg-white border-2 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2"
        >
          All
        </button> 
</div>
: <p></p> }
  { url ===pathname ?  
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Food Menu in Le Méridien Kochi</h2>
          
                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>
        

            </section>
: <p></p> }
        </>
            
    )
}

export default Search
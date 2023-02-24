import React, { useState } from "react"
import { useParams } from "react-router-dom";
import {Fooddata} from './FoodData';

import {dishes} from './FoodData';
import {overview} from './FoodData';
import {orderonline} from './FoodData';
import {Reviews} from './FoodData';
import {photos} from './FoodData';
import Card from 'react-bootstrap/Card'
import { motion } from "framer-motion";
import './image.css';
import Details from "./Details";

function Layout() {
    const [allData, setData] = useState(Fooddata);
    const [allDishes, setDishes] = useState(dishes);
    const [emptydata, setEmptyData] = useState([]);
    let {id}=useParams()
    var newid=id;    

    const handleFilteroverview = (id) => {
      const filteredData = overview.filter((item) => {
        if (item.id == id ) {
          return item;
        }
      });
  
      setEmptyData(filteredData);
    };
    const handleFilteronline = (id) => {
      const filteredData = orderonline.filter((item) => {
        if (item.id == id ) {
          return item;
        }
      });
  
      setEmptyData(filteredData);
    };
    
 const handleFilterreview = (id) => {
      const filteredData = Reviews.filter((item) => {
        if (item.id == id ) {
          return item;
        }
      });
  
      setEmptyData(filteredData);
    };
    
    const handleFilterphotos = (id) => {
      const filteredData = photos.filter((item) => {
        if (item.id == id ) {
          return item;
        }
      });
  
      setEmptyData(filteredData);
    };
    
    

    
    const handleInput = (field) => (event) => {
      const { value } = event.target;
  
      switch (field) {
    
          case 1:
              handleFilteroverview(value);
            break;
            case 2:
              handleFilteronline(value);
            break;
            case 3:
              handleFilterreview(value);
            break;
            case 4:
              handleFilterphotos(value);
            break;
        default:
          break;
      }
    }; 
    var canvases =allData.filter(item => item.id == newid ).map(function(items) {
        //const canvases=allData.map((item) => {

      
              return (

              
              <>
   
 
      <motion.div style={{ width: '22rem',border:"none" }} className="hove mb-4">
              
               <motion.div>
                   
                       
                           <motion.div
                          
                               whileHover={{ scale: 1.2 }}
                               whileTap={{ scale: 1 }}
                           >
                               <img src={items.imgdata} alt="image" />
                           </motion.div>
                  
             
               </motion.div>
         
           <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{items.rname}</h4>
                                        <span>{items.rating}&nbsp;★</span>
                                    </div>

                                    <div className="lower_data d-flex  justify-content-between">
                                        <h5>{items.address}</h5>
                                        <span>{items.price}</span>
                                    </div>
                                    </div>
                                    </motion.div>
        <div class="gallery-lightboxes">
        
        <div class="image-lightbox" id="lightbox-image-1">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-3" class="arrow-left"></a>
            <a href="#lightbox-image-2" class="arrow-right"></a>
            <img src="assets/photo1big.jfif" alt="" />
            <div class="image-title">  <img src={items.image3}  alt="pix" /></div>
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-2">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-1" class="arrow-left"></a>
            <a href="#lightbox-image-3" class="arrow-right"></a>
            <img src="assets/photo2big.jfif" alt="" />
            <div class="image-title">  <img src={items.image2}  alt="pix" /></div>
          </div>
        </div>
        
        <div class="image-lightbox" id="lightbox-image-3">
          <div class="image-lightbox-wrapper">
            <a href="#" class="close"></a>
            <a href="#lightbox-image-2" class="arrow-left"></a>
            <a href="#lightbox-image-1" class="arrow-right"></a>
            <img src="assets/photo3big.jfif" alt="" />
            <div class="image-title">  <img src={items.image1}  alt="pix" /></div>
          </div>
        </div>
        
      </div>
            <div class="image-wrapper">
          <a href="#lightbox-image-1">
            <img src={items.image1}  alt="pix" />
            <div class="image-title"></div>
          </a>
        </div>
      
        <div class="gallery-lightboxes">

        
      </div>
      
      <article class="sc-doWzTn ekwnsM">
        <div class="sc-gJqsIT bmpLLD">
          <section class="sc-1y3q50z-0 bFxTMj">
            <section role="tablist" class="sc-1y3q50z-1 kQDQPR">
              <div id="tablink_cla0jwhn6010s3n71svr7ks4d__0" tabindex="0" role="tab" class="sc-1y3q50z-3 eiMLBn">
                <h2 id="tablink_cla0jwhn6010s3n71svr7ks4d__0" tabindex="-1" class="sc-dln2kl-0 sc-1y3q50z-5 jPTnRn">

                {allDishes.map((category) => (
            <button 
            onClick={handleInput(category.p_id)}
            value={newid} key={newid}
          
           
              >
                
              {category.name}
              
            </button>
          ))}
              
                  </h2>
             
                </div>
                
               
               </section></section></div></article>
   
      </>     
                
              )
             
            
            });
            
    return (
      <div>
<h1> {canvases} </h1>
{<Details data={emptydata} /> }
                
              

</div>


    );

  };
  
  export default Layout;
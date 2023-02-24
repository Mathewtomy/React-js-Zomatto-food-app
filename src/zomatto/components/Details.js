import React from 'react'
import Card from 'react-bootstrap/Card'
import { motion } from "framer-motion";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
const Details = ({ data }) => {
   
    return (
        <>
            {
                data.map((element, k) => {
                    return (
                        <>
                            <Card style={{ width: '22rem',border:"none" }} className="hove mb-4">
                               
                  
               <motion.div>
                   
                       
                           <motion.div
                          
                               whileHover={{ scale: 1.2 }}
                               whileTap={{ scale: 1 }}
                           >
                            <Card.Img variant="top" className='cd' src={element.imgdata} />
                          
                           </motion.div>
                  
             
               </motion.div>
                                  
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.dname}</h4>
                                        <h4 className='mt-2'>{element.users}</h4>    
                                       
                                        <span>{element.rating}&nbsp;★</span>
                              
                                    </div>

                                    <div className="lower_data d-flex  justify-content-between">
                                        <h5>{element.category}</h5>
                                        <h5>{element.price}</h5>
                                        <h5>{element.comment}</h5>      
                                    </div> 

                                   
                            </Card>
                            <MDBRow>
      <MDBCol lg='4' md='12' className='mb-4'>
        <img src={element.image1} className='img-fluid rounded' alt='' />
      </MDBCol>

      <MDBCol lg='4' md='6' className='mb-4'>
        <img
          src={element.image2}
          className='img-fluid rounded-circle'
          alt=''
        />
      </MDBCol>

      <MDBCol lg='4' md='6' className='mb-4'>
        <img
          src={element.image3}
          className='img-fluid rounded-pill'
          alt=''
        />
      </MDBCol>
    </MDBRow>
                        </>
                    )
                })
            }

        </>
    )
}

export default Details
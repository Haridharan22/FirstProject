import React from 'react'
import Itemcart from './Itemcart';
import Navbar from '../Navbar/Navbar'
import data from './data';


 const Home = () => {
  return (
    <div>
        <Navbar/>
        <h1 className='text-center mt-3'>All Items</h1>
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                {
                    //used to traverse and display a list of similar objects of a component.
                    data.productData.map((item, index) => {
                            return(
                                <Itemcart 
                                img={item.img} 
                                title={item.title} 
                                desc={item.desc} 
                                price={item.price} 
                                item={item}
                                key={index} />
                            )
                    })
                }
            
            </div>

        </section>
    </div>
  )
}
export default Home;

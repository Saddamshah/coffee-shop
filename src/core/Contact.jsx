import React from 'react'
import Base from './Base'
import '../style.css'
import Heading from './Heading'
import Card from './Card'
import CoffeeData from './coffee-data/data'


const Contact = () => {
    return (
        <Base>
            <div className="bg-image-contact">
                <div className="bg-overlay">
                    <div className="content text-center">
                    </div>
                </div>
            </div>


            
           <div id="contactUs" className="my-5">
            <Heading title="Get In Touch" className="text-center my-3 py-2"/> 
            <div className="form container">
                <div className="row align-items-center ">
                        <div className="col-md-6  p-5 my-auto">
                            <img src="https://img4.goodfon.com/wallpaper/nbig/7/99/kofe-chashka-koritsa.jpg" alt="" width="100%"/>
                        </div>
                        <div className="col-md-6 col-sm-12 px-4 mx-auto">
                            <form name='contact' method='POST' data-netlify="true">
                                <input type='hidden' name='form-name' value='contact' />
                                <input type="text" placeholder="Your Name" required  name="name" />
                                <input type="email" placeholder="Your Email" required name="email" />
                                <textarea cols="30" rows="7" placeholder="Your Message" required name="message"></textarea>
                                <button>Send Message</button>
                            </form>
                        </div>
                </div>
            </div>
           </div>

           <div>
                <Heading title="Popular Coffee's" className="text-center my-5 py-3"/>
                <div className="container">
                        <div className="row justify-content-center">
                                {CoffeeData.slice(0, 4).map(({name, src, price, description}, index) => {
                                    return (
                                    <div className="col-md-3 col-sm-6 mb-5">
                                        <Card 
                                            name={name}
                                            src={src}
                                            price={price}
                                        />
                                    </div>
                                    )
                                })}  
                        </div>
                </div>
           </div>
            
        </Base>
    )
}

export default Contact

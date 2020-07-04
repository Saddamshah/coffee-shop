import React from 'react'
import Base from './Base'
import '../style.css'
import Heading from './Heading'
import Card from './Card'
import CoffeeData from './coffee-data/data'

const Home = () => {
    return (
        <Base>
            <div className="bg-image">
                <div className="bg-overlay">
                    <div className="content text-center">
                        <h1 className="heading  mb-3 myFontSize">Coffee Shop!</h1>
                        <h3 className="heading px-2">best coffee around the world!</h3>
                    </div>
                </div>
            </div>

            
            <div>
                <Heading title="About Ourself" className="text-center my-5 py-3"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 mb-4">
                            <img src="https://www.sciencenews.org/wp-content/uploads/2015/09/100315_coffee_opener_NEW_0.jpg" alt="about us" width="100%"/>
                        </div>
                        <div className="col-md-7 col-sm-12 my-auto">
                            <div className="content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consequatur corporis distinctio accusamus nulla, laudantium totam beatae veritatis expedita asperiores, id voluptas omnis facilis earum aperiam dolore reiciendis et placeat accusantium, doloribus voluptatum! Debitis cum omnis consectetur sapiente itaque non quaerat reiciendis nemo hic, veritatis magni, culpa quam voluptates natus.</p>

                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eligendi voluptatem minima necessitatibus maiores asperiores, id repellat ratione ex ut amet vero, similique culpa distinctio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
          
           <div>
                <Heading title="Popular Coffee's" className="text-center my-5 py-3"/>
                <div className="container">
                        <div className="row justify-content-center">
                                {CoffeeData.map(({name, src, price, description}, index) => {
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

        
           
           <div id="contactUs" className="mb-5">
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
        </Base>
    )
}



export default Home

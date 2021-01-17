import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'

function Recipes() {
    return(
        <div className="col-md-6 col-sm-10 mx-auto p-0 my-5">
          <h1 className="font-bold text-2xl"> 
            Recipes
          </h1>
          <h5>Here are the recipes you can make based on your current food items!</h5>
          
        <div className="card p-3 my-5"> 
            <div className="p-3">
            <h3 className="font-bold text-xl mb-3">
                Homemade Bubble Tea with Tapioca
            </h3>
            <p className="mb-3">
                tapioca powder, brown sugar, tea of choice, milk
            </p>
            <Button 
                className="primary"
                href="https://www.foxyfolksy.com/brown-sugar-milk-tea/"
            >    
                View
            </Button>
            </div>
        </div>

        <div className="card p-3 my-5"> 
            <div className="p-3">
            <h3 className="font-bold text-xl mb-3">
                Delicious Spicy Tuna Sushi
            </h3>
            <p className="mb-3">
                tuna sashimi, rice, soy sauce, sriracha
            </p>
            <Button 
                className="primary"
            >    
                View
            </Button>
            </div>
        </div>

        <div className="card p-3 my-5"> 
            <div className="p-3">
            <h3 className="font-bold text-xl mb-3">
                Jalapeno Mac & Cheese
            </h3>
            <p className="mb-3">
                macaroni, lots of cheese, milk
            </p>
            <Button 
                className="primary"
            >    
                View
            </Button>
            </div>
        </div>

        
          
        </div>
    )
}

export default Recipes
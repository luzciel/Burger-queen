import React from 'react'
import OrderDetail from './OrderDetail'
import "./Orders.css"

const BreakfastMenu = () =>{
        //trayendo la data del menu
        const [menu, setMenu] = React.useState([])

            React.useEffect(() => {
                getData()
            }, [])

            const getData = async () => {
                const data = await fetch('https://luzciel.github.io/Burgen-queen/src/data/menu.json')
                const desayuno = await data.json()
                
                setMenu(desayuno.desayuno)
            }

            const [cart, setCart] =  React.useState([]) 

        //Funcion que agrega el producto a la Orden     
        const addProduct = id => {
            const item = menu.filter((item) => item.id === id);
            setCart([...cart, ...item])
        }

        //subcategorias  ****
        const subcategories = function (e) {
            const option = e.target.value;
            console.log(option)
            setMenu(option)
        }

    return (
        <div className='container menus'>
        <div className='breakfast-menu '>
            {
                 menu.map( item =>(
                     <div key={item.id}  className='unicard card'>
                             <h1 className='product-name' >{item.producto}</h1>
                             <img src={item.img} alt="imgMenu"  className="product-image" />
                             <button type='button' className='product-price'>${item.precio}
                              
                              {/* *** */}
                             <select class="form-select" aria-label="Default select example">
                                <option selected>select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                             </select>
                               
                               {/* *** */}

                             </button>
                             <button type='button' className='additional-button-egg'>Huevo: 500</button>
                             <button type='button' className='additional-button-cheese'>Queso: 500</button>
                             <button type='button' className="add-button" onClick={() => addProduct(item.id)}>+ Añadir</button>
                         </div>   
                 ))
            } 
        </div>
            <div className='breakfast-cart'>
            {<OrderDetail
            cart={cart}
            setCart={setCart} />}
            </div>

              
        </div>
    )

}


export default BreakfastMenu



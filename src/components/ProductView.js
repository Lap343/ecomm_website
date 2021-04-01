import { useEffect, useState, } from 'react';
import { Link } from 'react-router-dom';

const ProductView = () => {

      let [ productData, setProductData ] = useState('');

      const fetchData = async () => {
            const base = 'https://fakestoreapi.com/products/'
            const url = `${base}`

            await fetch(url)
                  .then(res=>res.json())
                  .then((response) => {
                        setProductData(response)
                  })
            .catch((error)=> {
                  console.log(error)
            })
      }

      useEffect(() => {
            fetchData()
      }, [])

      const iterate = (data) => {
            if (data) {
                  return data.map((info, key) => {
                        return <div 
                              style={{ 
                                    display: "inline-block",
                                    height: "auto", 
                                    width: "18vw",
                                    paddingBottom: "2em",
                                    margin: "0.2em",
                                    border: "solid black 0.1em"
                              }}
                              key={key}
                        >
                              <div style={{ fontWeight: "bold"}} >
                                    {info.title}
                              </div>
                              <div 
                                    style={{ 
                                          borderBottom: "solid grey 0.1em", 
                                          borderTop: "solid grey 0.1em"
                                    }}
                              >
                                    <strong>Price: </strong>
                                    ${info.price}
                              </div> 
                              <div>
                                    <strong>Description: </strong>
                                    <br/>{info.description}
                              </div>
                              <div>
                                    <strong>Category: </strong>
                                    <br/>{info.category}
                              </div>
                              <img 
                                    src={info.image} 
                                    alt={''} 
                                    style={{ 
                                          display: "block",
                                          maxHeight: "auto", 
                                          maxWidth: "100%",
                                          margin: "2em 0 0 0"
                                    }} 
                              /><br/>
                              <Link  to={`/details/${info.id}`}>
                                    <button>Look at product's details</button>
                              </Link><br/><hr/>
                              <button>Add to cart</button>
                        </div>
                  })
            } else {
            console.log('not yet')
            }
      }

      return(
            <div>
                  {iterate(productData)}
            </div>
      )
}

export default ProductView;
import { useEffect, useState, } from 'react';

const ProductDetails = ({ match }) => {

    let [ productData, setProductData ] = useState('');

    const fetchData = async () => {
          const base = 'https://fakestoreapi.com/products'
          const id = match.params.id
          const url = `${base}/${id}`

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

    const itterate = (data) => {
        if (data) {
            console.log(data)
            return(
                <div>
                    <button>Add to cart</button>
                    <div>{data.title}</div>
                    <div>{data.price}</div>
                    <div>{data.description}</div>
                    <img src={data.image} alt='' />
                    <div>{data.category}</div>
                </div>
            )
        } else {
            console.log('not yet')
        }
    }

    return(
        <>
            <div>Product#{match.params.id}</div>
            <div>
                {itterate(productData)}
            </div>
        </>
    )
}

export default ProductDetails
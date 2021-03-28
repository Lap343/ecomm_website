import { useCallback, useEffect, useState } from 'react';

const App = () => {

  let [ productData, setProductData ] = useState('')

  const fetchData = useCallback(() => {
    const base = 'https://fakestoreapi.com/products/'
    const url = `${base}`

    fetch(url)
    .then(res=>res.json())
    .then((response) => {
      setProductData(response)
    })
    .catch((error)=> {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const iterate = (data) => {
    if (data) {
      return data.map((info) => {
        return <div 
          style={{ 
            display: "inline-block",
            height: "auto", 
            width: "20vw",
            paddingBottom: "2em",
            marginBottom: "8em",
            border: "solid black 0.5em"
          }}>
          <div>{info.title}</div>
          <div>{info.price}</div>
          <div>{info.description}</div>
          <img 
            src={info.image} 
            alt={''} 
            style={{ 
              display: "block",
              maxHeight: "auto", 
              maxWidth: "100%" 
            }} 
          />
          <div>{info.category}</div>
        </div>
      })
    } else {
      console.log('not yet')
    }
  }


  return (
    <div>
      {
        iterate(productData)
      }
    </div>
  )
}

export default App;
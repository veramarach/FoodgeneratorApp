import React, { useState } from 'react'
import data from "./Meal.json"
import styled from '@emotion/styled'
import {GiForkKnifeSpoon} from "react-icons/gi"


const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     min-height: 90vh;
`


const Card = styled.div`
        width: 500px;
        min-height: 300px;
        background-color: beige;
        padding: 30px;
        text-align: center;

        h2{
          font-weight:bolder;
          font-size:32px;
        }

        button{
          padding:10px;
          border-radius:5px;
          background-color:#1AAC69;
          color:white;
          cursor: pointer;
        }

`

const Breakfast = styled.div`
   font-size:18px;
   margin-bottom:10px;

`
const Lunch = styled.div`
     font-size: 18px;
     margin-bottom:10px;
`
const Dinner = styled.div`
font-size:18px;
margin-bottom:10px;

`
const Price = styled.div`
    font-size: 18px;
    margin-bottom:10px;
    font-style:italic;
`


const App :React.FC= () => {
  const [count, setCount] = useState<number>(0)

  const MealGenerate = ()=> {
    const Random = Math.floor(Math.random() * data.length)
    setCount(Random)
  }

  

  return (
    <Container>
      <Card>
       
        <h2>Vera's Delight ~~ {<GiForkKnifeSpoon/>}</h2>
        <Breakfast>Breakfast: {data[count % data.length]?.Breakfast} </Breakfast>
        <Lunch>Lunch:{data[count % data.length]?.Lunch} </Lunch>
        <Dinner>Dinner: {data[count % data.length]?.Dinner} </Dinner>
        <Price>Price:{data[count % data.length]?.Price} </Price>
        <button onClick={MealGenerate}>Pick Meal</button>

      </Card>
    </Container>
  )
}

export default App
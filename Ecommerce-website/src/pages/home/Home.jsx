import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext'

const Home = () => {
    const context = useContext(MyContext);
    console.log(context);
    const {state, color} = context;

  return (
    <Layout>
        <h1 className='text-xl'>Name: </h1>
        <h2>Roll No: </h2>

        <h3>Color: {color}</h3>
    </Layout>
  )
}

export default Home;
import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/data/MyContext';

const Order = () => {
  const context = useContext(MyContext);
  const {name, rollno} = context;

  return (
    <Layout>
      <h1>Name: {name}</h1>
      <h1>Roll No: {rollno}</h1>
    </Layout>
  )
}

export default Order
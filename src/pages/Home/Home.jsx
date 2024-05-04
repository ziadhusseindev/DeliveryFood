import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisply from '../../Components/FoodDisply/FoodDisply'
import AppDownload from '../../Components/AppDownload/AppDownload'

export const Home = () => {

  const [category,setCategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisply  category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
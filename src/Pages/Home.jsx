import React from 'react'
import Banner from './Homepage/Banner'
import Choose from './Homepage/Choose'
import Popular from './Homepage/Popular'
import Deals from './Homepage/Deals'
import Destination from './Homepage/Destination'

function Home() {
  return (
    <>
    <div className="">
        <Banner/>
        <Choose/>
        <Popular/>
        <Deals/>
        <Destination/>
    </div>
    </>
  )
}

export default Home
import React from 'react';
import Navbar from '../Components/Navbar';
import DevApp from '../Components/DevApp';
import Footer from '../Components/Footer';

export default function CommonHome() {
  return (
    <div>
        <Navbar/>
        <DevApp/>
        <div className='my-0'></div>
        <Footer/>
    </div>
  )
}

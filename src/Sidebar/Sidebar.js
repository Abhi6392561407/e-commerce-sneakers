import React from 'react'
import Price from './Price/Price'
import Color from './Color/Color'
import './Sidebar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Category from './Category/Category'

export default function Sidebar({handleChnage}) {
  return (
    <>
    <section className='sidebar'>
        <div className='logo-container'>
            <h1><AiOutlineShoppingCart/></h1>

        </div>
        <Category handleChnage = {handleChnage}/>
        <Price handleChnage={handleChnage}/>
        <Color handleChnage={handleChnage}/>
    </section>
    </>
  )
}

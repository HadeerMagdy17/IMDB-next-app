import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='py-4 flex justify-center gap-8 font-bold bg-amber-200 dark:bg-gray-600'>
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem  title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar

import React from 'react'
import dynamic from 'next/dynamic'

const NavbarItemWithSuspense = dynamic(() => import('./NavbarItem'), {
  ssr: false,
});

const Navbar = () => {
  return (
    <div className='py-4 flex justify-center gap-8 font-bold bg-amber-200 dark:bg-gray-600'>
      <NavbarItemWithSuspense title="Trending" param="fetchTrending"/>
      <NavbarItemWithSuspense title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Navbar

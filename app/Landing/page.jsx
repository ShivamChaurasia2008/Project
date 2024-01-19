import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BgImg from '../../public/CandidateBG.png'
import '../../styles/globals.css'


function page() {
  return (
    <div id="Landing" className='h-screen w-full relative flex'>

        <div className='h-screen w-2/4 absolute right-2'>
            <Image src={BgImg} />
        </div>

        <div id="leftContainer" className='h-screen w-2/4 flex flex-col items-center'>

            <section className='absolute left-[5%]'>
            <h1 className='text-7xl font-bold mt-13'>Jobs for you.</h1>
             <h1 className='text-8xl font-bold mt-11 ml-14'>Talent for them.</h1>
            </section>

            <section className='absolute ml-11 bottom-1/3'>
                <article>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum culpa numquam saepe officiis mollitia. Iste incidunt itaque eum minima! Quasi provident dolore dicta iure doloremque a laudantium! Saepe facilis vero, aut nobis veniam, optio commodi dolorum veritatis repudiandae debitis aspernatur cum harum porro totam vitae reiciendis? Similique illo quaerat dolores.
                </article>
            </section>
        </div>
    </div>
  )
}

export default page
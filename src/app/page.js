import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png'
import photo from '../../public/photo.jpg'

const ContractionPage = () => {
  return (
    <section >
      <>
        <p className='text-2xl font-bold text-center sticky top-0 bg-slate-700 text-white py-4 rounded'>Website is under-construction, It's coming soon...</p>
      </>
      <>
      <div className='lg:flex justify-center gap-10 items-center my-20'>
        <div >
          <Image src={photo} className='rounded w-80 h-80 rounded-full mx-auto'></Image>
        </div>
        <div>
          <h1 className='text-4xl my-2 lg:text-left sm:text-center md:text-center text-center'>Nurul Hoque, MD</h1>
          <h2 className='text-2xl my-2 lg:text-left sm:text-center md:text-center text-center'>Psychiatrist and CEO</h2>
          <p className='text-xl my-2 lg:text-left sm:text-center md:text-center text-center'>EagleMD MH Svc LLC.</p>
          <ul>
            <li className='my-2 lg:text-left sm:text-center md:text-center text-center'>Tel: (678) 656-2232</li>
            <li className='my-2 lg:text-left sm:text-center md:text-center text-center'>Email: info@eaglemdpsychiatry.com</li>
            <li className='my-2 lg:text-left sm:text-center md:text-center text-center'>Address: Suite 385, 2302 Parklake Dr.Atlanta, GA30345</li>
          </ul>
        </div>
      </div>
      </>
      <>
       <p className='text-4xl font-bold text-center text-white bg-secondaryColor py-4 rounded'>Services</p>
       <ul className='lg:grid grid-cols-4 mt-10 px-20 my-24'>
          <li className='lg:text-left sm:text-center md:text-center text-center'>Depression</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Anxiety</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>PTSD</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Phobia</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Bipolar I & II disorder</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Mood instability</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Autism </li>
          <li className='lg:text-left sm:text-center md:text-center text-center'>ADHD</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Schizophrenia</li>
          <li className='lg:text-left sm:text-center md:text-center text-center'>OCD</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Eating Disorder </li>
          <li className='lg:text-left sm:text-center md:text-center text-center'>Substance Related Addiction</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Dementia</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Sleeping Disorders </li>
          <li className='lg:text-left sm:text-center md:text-center text-center'>Lifestyle modifications</li> 
          <li className='lg:text-left sm:text-center md:text-center text-center'>Life skills</li>
       </ul>
      </>
      <>

      <Image src={logo} className='w-40 h-40 mx-auto'></Image>
      
      </>
      
    </section>
  );
};

export default ContractionPage;
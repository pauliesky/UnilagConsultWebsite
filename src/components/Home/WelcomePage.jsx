import React from 'react'
import UcImage from '../../assets/uc_image.png'

function WelcomePage() {
  return (
    <>
    <div className=' px-10 flex flex-row gap-11'>      
    <div className='flex flex-col justify-center items-center' >
        <div className='bg-yellow-400 w-[280px] h-[50px]'></div>
        <img className='w-[280px] h-[277px]' alt='uc-img' src={UcImage}></img>
        <div className='bg-sky-500  w-[280px] h-[50px]'></div>
    </div>
    <div className='flex flex-col w-[70%] '>
    <div className='text-[28px] normal ' >
      <h1>WELCOME TO UNILAG CONSULT</h1>
      <div className='bg-yellow-400 h-[.2rem] mt-[.5rem] mb-[3rem] w-[3rem]'></div>
    </div>
    <div className='mb-[4rem]'  >
      Unilag Consult was established by the Governing Council of University of Lagos 
      in July 1983 and was registered under
      the Business Names Act of 1961 with registration number 459866.  However, 
      it was incorporated as a Limited Liability Company under the Companies’ 
      and Allied Matters Act of 1990, with Registration number RC:1146081.
      Unilag Consult has the following holding structure: 
      </div>
       <div>
      <table className=' border-separate border-slate-500 table-fixed w-[50%]'>
        <tr>
          <td className='bg-sky-400' >University of Lagos</td>
          <td  className='bg-yellow-400' >99%</td>
        </tr>
        <tr>
          <td  className='bg-sky-400' >UNiversity of Lagos Holdings:</td>
          <td   className='bg-yellow-400' >1%</td>
          </tr>  <tr>
          <td  className='bg-sky-400'>Total:</td>
          <td  className='bg-yellow-400' >100%</td>
          </tr>
      </table>
      <div className='mt-[4rem]'>
      Unilag Consult has a unique assemblage of professionally and
       academically qualified and competent hands to provide adequate technical services in any 
      sector of the economy.  We have at our disposal a pool of over 2000 highly skilled resource
       persons, consultants and technical support staff both within and outside the university. 
      </div>
    </div>
    </div>
  

    </div>
 
    </>
  )
}

export default WelcomePage

import Inter from 'next/font/google'
import Head from "next/head"
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md'


export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
      <Head>
        <title>rouzbeh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>

        <div className='bg-gray-200 rounded-2xl shadow-2xl flex w-2/3 max-w-4xl '>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>company</span>Name
            </div>
            <div className='py-10'>

              <h2 className='text-3xl font-bold text-green-500'>sign in to Account</h2>
              <div className='border-2 w-10 border-green-500 mb-2 inline-block'></div>
              <div className='flex justify-center py-2'>
                <a href="#" className='border-2 border-gray-100 rounded-full p-3 mx-1'>
                  <FaFacebookF className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-100 rounded-full p-3 mx-1'>
                  <FaLinkedinIn className='text-sm' />
                </a>
                <a href="#" className='border-2 border-gray-100 rounded-full p-3 mx-1'>
                  <FaGoogle className='text-sm' />
                </a>
              </div>
              <p className='text-gray-500 my-3'> or use your  email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-400 m-2' />
                  <input type="email" name='email' placeholder='Email' className='bg-gray-100 text-gray-500 outline-none text-sm flex-1' />
                </div>
                <div className='bg-gray-100  w-64 p-2 flex items-center mb-3'>
                  <MdLockOutline className='text-gray-400 m-2' />
                  <input type="password" name='password' placeholder='Password' className='bg-gray-100 text-gray-500 outline-none text-sm flex-1' />
                </div>

                <div className='flex justify-between w-64 mb-5 
                
                '>
                  <label className='flex items-center  text-xs '> <input type="checkbox" name='remember' className='mr-1' /> remember me</label>
                  <a href="#" className='text-xs '>Foregt Password?</a>
                </div>
                <a href="#" className='border-2 jus border-green-500 text-green-500 rounded-full py-2 px-12 inline-block font-semibold hover:bg-white hover:text-green-500'>sign up</a>
    
              </div>
            </div>
          </div>
          <div className='w-3/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12' >
            <h2 className='text-3xl font-bold mb-2'>Hello, Friend!</h2>
            <div className='border-2 w-10 border-white mb-2 inline-block'></div>
            <p className='mb-10'>fill up personal information and start journey with us.</p>
            <a href="#" className='border-2 border-white  rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>sign up</a>
          </div>
        </div>

      </main>


    </div>


  )
}
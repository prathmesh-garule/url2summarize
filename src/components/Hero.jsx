// import React from "react";

// import { logo } from "../assets";

// const Hero = () => {
//   return (
//     <header className='w-full flex justify-center items-center flex-col'>
//       <nav className='flex justify-between items-center w-full mb-10 pt-3'>
//         <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

//         <button
//           type='button'
//           onClick={() =>
//             window.open("https://github.com/TidbitsJS/Summize", "_blank")
//           }
//           className='black_btn'
//         >
//           GitHub
//         </button>
//       </nav>

//       <h1 className='head_text'>
//         Summarize Articles with <br className='max-md:hidden' />
//         <span className='orange_gradient '>OpenAI GPT-4</span>
//       </h1>
//       <h2 className='desc'>
//         Simplify your reading with Summize, an open-source article summarizer
//         that transforms lengthy articles into clear and concise summaries
//       </h2>
//     </header>
//   );
// };

// export default Hero;



// import { logo } from '../assets';
import { logo } from '../assets';

import React from 'react'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col " >
      <nav className='flex justify-between w-full mb-10'>

        <img src={logo} alt="some logo" className='w-28 object-contain '></img>

        <button type="button" onClick={() => window.open('https://linktr.ee/prathmeshgarule')} className='black_btn'>
          connect
        </button>
      </nav>

      <h1 className='head_text'>
        Welcome to URL2Summary!<br className='max-md:hidden'></br>
        <span className='orange_gradient'>
          Open AI GPT -3
        </span>
      </h1>
      <h2 className='desc'>
        Summarize any web content in seconds. Just enter the URL and get concise summaries instantly. Save time, stay informed!

      </h2>

    </header>


  )
}

export default Hero
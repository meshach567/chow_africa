import React from 'react';

// type buttonProps = {
//     text: string;
//     onClick: () => React.HtmlHTMLAttributes<HTMLButtonElement>;

// }

const Hero: React.FC = () => {
  return (
    <div className="h-screen bg-slate-800 ">
        <div className="flex flex-col justify-center h-full w-[80%]">
            <div className='flex flex-col items-center leading-10'>
                <div> <p>Join The Chow Africa Waitlist </p></div>
                <div><p className='text-white'>Find chow, <span className='text-green-400'>Asap</span></p></div>
                <div>The patient dogs eats left overs. Be the first to know when we launch. Join our Waitlist </div>
                <form className='flex flex-col'>
                    <input type="text" placeholder="Enter your email address" />
                    <button type="button" className='bg-emerald-500 text-white border-amber-50 border-2'>Join Waitlist</button>
                </form>
            </div>
        </div>
      
    </div>
  );
};

export default Hero;
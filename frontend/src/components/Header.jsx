
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-blue-400 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap lora-font'>
            <span className='text-slate-600'>Mindful</span>
            <span className='text-slate-700'>Analytics</span>
            <span className='text-slate-900'>Hub</span>
          </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline sedan-regular text-slate-900 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/analysis'>
            <li className='hidden sm:inline sedan-regular text-slate-900 hover:underline'>
              Analysis
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
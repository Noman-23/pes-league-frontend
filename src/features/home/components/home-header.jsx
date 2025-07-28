import { AlignRight, Heart, TableProperties } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HomeHeader({ fav }) {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className='fixed top-0 left-0 right-0'>
      <div className='flex items-center justify-between py-2 min-h-12 border-b border-yellow-100 text-yellow-100 bg-neutral-950 px-4'>
        <button onClick={() => handleNavigate('/')}>LOGO</button>
        <div className=' flex gap-4'>
          <button onClick={() => handleNavigate(fav ? '/' : '/favorites')}>
            {fav ? <TableProperties /> : <Heart />}
          </button>
          <button onClick={() => handleNavigate('/login')}>
            <AlignRight />
          </button>
        </div>
      </div>
    </div>
  );
}

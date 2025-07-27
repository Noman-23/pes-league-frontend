import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  return (
    <div className='bg-neutral-950 h-screen grid place-content-center'>
      <Card className='bg-neutral-900 text-red-200 px-16 text-center'>
        <CardTitle>Page Not Found</CardTitle>
        <CardDescription>
          <p>{location.pathname} does not exist</p>
        </CardDescription>
      </Card>
    </div>
  );
}

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';

export function LoginForm({ className, ...props }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div
      className={cn('flex flex-col gap-6 ', className)}
      {...props}>
      <Card
        className={
          'bg-linear-30 from-neutral-950 to-neutral-800 from-60% backdrop-blur-md border border-white/20 shadow-lg py-12'
        }>
        <CardHeader>
          <CardTitle className={'text-neutral-300 text-xl'}>Login to your account</CardTitle>
          <CardDescription>Enter your user name below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-3'>
                <Label
                  className={'text-neutral-400'}
                  htmlFor='username'>
                  User Name
                </Label>
                <Input
                  id='username'
                  type='text'
                  placeholder='admin'
                  className={'text-neutral-100 border border-white/50 !text-sm py-4'}
                  {...register('username')}
                  required
                />
              </div>
              <div className='grid gap-3'>
                <Label
                  className={'text-neutral-400 '}
                  htmlFor='password'>
                  Password
                </Label>
                <Input
                  id='password'
                  type='password'
                  placeholder='password'
                  className={'text-neutral-100 border border-white/50  !text-sm  py-4'}
                  {...register('password')}
                  required
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Button
                  type='submit'
                  className='bg-linear-30 from-neutral-950 to-neutral-800 from-30% border border-white/50  cursor-pointer transition-all duration-300 ease-in-out hover:shadow hover:shadow-accent active:scale-95'>
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

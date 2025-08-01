import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { useLogin } from '../home/hooks/useLogin';

export function LoginForm({ className, ...props }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const { mutate: login, isPending } = useLogin();
  const onSubmit = (data) => {
    console.log(data);
    login(data);
  };

  return (
    <div className={cn('flex flex-col gap-6 ', className)} {...props}>
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
            <div className='flex flex-col gap-4'>
              <div className='grid gap-3'>
                <Label className={'text-neutral-400'} htmlFor='username'>
                  User Name
                </Label>
                <Input
                  disabled={isPending}
                  id='username'
                  type='text'
                  placeholder='admin'
                  className={'text-neutral-100 border border-white/50 !text-sm py-4'}
                  {...register('username')}
                  required
                />
              </div>
              <div className='grid gap-3'>
                <Label className={'text-neutral-400 '} htmlFor='password'>
                  Password
                </Label>
                <Input
                  disabled={isPending}
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
                  disabled={isPending}
                  className=' bg-yellow-100 hover:bg-yellow-200 text-neutral-950 transform  active:translate-y-0.5'>
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

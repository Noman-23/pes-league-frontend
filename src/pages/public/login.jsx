import { LoginForm } from '@/features/login/login-form';
import withTransition from '@/components/shared/withTransition';

function Page() {
  return (
    <div className='h-screen flex justify-center items-center bg-neutral-950 px-2'>
      <LoginForm className='w-full max-w-[380px] ' />
    </div>
  );
}

export const Login = withTransition(Page);

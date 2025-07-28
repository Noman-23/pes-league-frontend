import { useMutation } from '@tanstack/react-query';
import { login } from '@/services/auth.service';
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const { login: setLogin } = useAuthStore();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: ({ token, user }) => {
      setLogin({ token, user });
      navigate('/');
    },
  });
};

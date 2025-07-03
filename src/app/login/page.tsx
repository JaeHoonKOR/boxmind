'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from '@/components/ui/InputField';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { login } from '@/lib/api';
import Head from 'next/head';

const schema = z.object({ email: z.string().email() });
type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log('[Login] submit', data);
    await login(data.email);
    if (typeof window !== 'undefined') {
      localStorage.setItem('loggedIn', 'true');
    }
    router.push('/dashboard');
  };

  return (
    <>
      <Head>
        <title>Login - BoxMind</title>
      </Head>
      <main className="p-8 space-y-4" aria-label="로그인">
        <h1 className="text-2xl font-bold text-center">로그인</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
          <InputField label="이메일" name="email" type="email" register={register} required />
          {errors.email && (
            <span className="text-red-500 text-sm">유효한 이메일을 입력하세요</span>
          )}
          <Button type="submit" className="w-full">로그인</Button>
        </form>
      </main>
    </>
  );
}

'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputField from '@/components/ui/InputField';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/api';
import Head from 'next/head';

const schema = z.object({ email: z.string().email() });
type FormData = z.infer<typeof schema>;

export default function SignUpPage() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    console.log('[SignUp] submit', data);
    await signUp(data.email);
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Sign Up - BoxMind</title>
      </Head>
      <main className="p-8 space-y-4" aria-label="회원가입">
        <h1 className="text-2xl font-bold text-center">회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto">
          <InputField label="이메일" name="email" type="email" register={register} required />
          {errors.email && (
            <span className="text-red-500 text-sm">유효한 이메일을 입력하세요</span>
          )}
          <Button type="submit" className="w-full">가입하기</Button>
        </form>
      </main>
    </>
  );
}

'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button';
import InputField from './ui/InputField';
import Modal from './ui/Modal';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
});

type FormData = z.infer<typeof schema>;

export default function AddItem() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log('물건 등록', data);
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>물건 추가하기</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="물건 등록">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField label="물건명" name="name" register={register} required />
          <InputField label="카테고리" name="category" register={register} required />
          {errors.name && <span className="text-red-500 text-sm">필수 입력</span>}
          <Button type="submit" className="w-full">등록</Button>
        </form>
      </Modal>
    </>
  );
}

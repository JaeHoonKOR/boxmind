'use client';
import { HTMLInputTypeAttribute } from 'react';

interface Props {
  label: string;
  type?: HTMLInputTypeAttribute;
  register: any;
  name: string;
  required?: boolean;
}

export default function InputField({ label, type = 'text', register, name, required }: Props) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">{label}</span>
      <input
        {...register(name, { required })}
        type={type}
        aria-required={required}
        className="w-full p-3 rounded-[14px] shadow-neu-inset placeholder-gray-400 focus:border focus:border-gray-400 focus:outline-orange-500"
      />
    </label>
  );
}

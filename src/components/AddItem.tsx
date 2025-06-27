"use client";
// Form to add a new item to a box
import { useState, useCallback, memo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/Button";
import InputField from "./ui/InputField";
import Modal from "./ui/Modal";
import { createItem } from "@/lib/api";

const schema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  barcode: z.string().optional(),
  photo: z.any().optional(),
});

type FormData = z.infer<typeof schema>;

function AddItem() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const openModal = useCallback(() => {
    console.log("[AddItem] open modal");
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log("[AddItem] close modal");
    setOpen(false);
  }, []);

  const onSubmit = useCallback(
    async (data: FormData) => {
      console.log("[AddItem] submit", data);
      await createItem("box", {
        name: data.name,
        category: data.category,
        barcode: data.barcode || undefined,
      });
      closeModal();
    },
    [closeModal],
  );

  return (
    <>
      <Button onClick={openModal}>물건 추가하기</Button>
      <Modal open={open} onClose={closeModal} title="물건 등록">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField label="물건명" name="name" register={register} required />
          <InputField
            label="카테고리"
            name="category"
            register={register}
            required
          />
          <InputField label="바코드" name="barcode" register={register} />
          <label className="block space-y-1">
            <span className="text-sm font-medium">사진</span>
            <input type="file" {...register("photo")} className="w-full" />
          </label>
          {errors.name && (
            <span className="text-red-500 text-sm">필수 입력</span>
          )}
          <Button type="submit" className="w-full">
            등록
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default memo(AddItem);

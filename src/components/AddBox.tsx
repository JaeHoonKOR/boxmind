"use client";
// Form to add a new storage box
import { useState, useCallback, memo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/Button";
import InputField from "./ui/InputField";
import Modal from "./ui/Modal";
import { createBox } from "@/lib/api";

const schema = z.object({ name: z.string().min(1) });
type FormData = z.infer<typeof schema>;

function AddBox() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const openModal = useCallback(() => {
    console.log("[AddBox] open modal");
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    console.log("[AddBox] close modal");
    setOpen(false);
  }, []);

  const onSubmit = useCallback(
    async (data: FormData) => {
      console.log("[AddBox] submit", { name: data.name });
      await createBox("user", data.name);
      closeModal();
    },
    [closeModal],
  );

  return (
    <>
      <Button onClick={openModal}>새 공간 만들기</Button>
      <Modal open={open} onClose={closeModal} title="새 공간">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            label="공간 이름"
            name="name"
            register={register}
            required
          />
          {errors.name && (
            <span className="text-red-500 text-sm">필수 입력</span>
          )}
          <Button type="submit" className="w-full">
            생성
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default memo(AddBox);

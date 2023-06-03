'use client';

import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '../ui/Input/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '../ui/Buttons';

type FormData = yup.InferType<typeof schema>;

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.number().positive().integer().required(),
  })
  .required();

const FooterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-5 items-end">
      <TextField
        id="text"
        type="text"
        name="name"
        errors={errors}
        register={register}
        required
        className="py-3 px-4 text-[13px] bg-black border-[2px] rounded-lg border-[rgba(255,255,255,.3)]"
      ></TextField>
      <TextField
        id="text"
        type="text"
        name="email"
        errors={errors}
        register={register}
        required
        className="py-3 px-4 text-[13px] bg-black border-[2px] rounded-lg border-[rgba(255,255,255,.3)]"
      ></TextField>
      <Button
        type="submit"
        className="flex items-center py-2 px-4 bg-white text-black rounded-lg"
      >
        <span>Subscribe</span>
      </Button>
    </form>
  );
};

export default FooterForm;

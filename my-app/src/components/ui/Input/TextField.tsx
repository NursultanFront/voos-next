'use client';

import { useState } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';
import cn from 'clsx';

interface TextFieldProps<T extends FieldValues> {
  value?: string;
  name: Path<T>;
  type: string;
  id: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required: boolean;
  className?: string;
}

const TextField = <T extends FieldValues>(props: TextFieldProps<T>) => {
  const [isFocus, setFocus] = useState<boolean>(false);

  return (
    <div className="flex flex-col flex-grow">
      <label
        htmlFor={props.id}
        className={cn(
          'mb-[10px] text-xs',
          isFocus ? 'opacity-100' : 'opacity-50'
        )}
      >
        {props.name.toUpperCase()}
      </label>
      <input
        className={props.className}
        id={props.id}
        type={props.type}
        {...props.register(props.name)}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => setFocus(false)}
      />
      {props.errors && props.errors[props.name] && <p>Ошибка</p>}
    </div>
  );
};

export default TextField;

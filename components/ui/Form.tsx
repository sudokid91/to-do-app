"use client";

import { ReactNode, useRef } from "react";

interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: (e: any) => void
}

const Form = ({
  children,
  action,
  className,
  onSubmit
}: FormProps) => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      ref={ref}
      action={action}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
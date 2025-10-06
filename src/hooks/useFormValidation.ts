import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AnyObjectSchema, InferType } from "yup";

type Props<T extends AnyObjectSchema> = {
  validationSchema: T;
};

export default function useFormValidation<T extends AnyObjectSchema>({
  validationSchema,
}: Props<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<InferType<T>>({
    resolver: yupResolver(validationSchema),
  });

  return {
    watch,
    errors,
    register,
    handleSubmit,
    setValue,
    reset,
  };
}

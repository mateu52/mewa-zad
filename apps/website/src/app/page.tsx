//import styles from './page.module.css';
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "./zodSchema/login";

type FormData = z.infer<typeof loginSchema>;
export default function Index() {

  //const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: FormData){
    console.log(data);
  }
  
  return (
    <div>
      <form 
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="opinion"
        >Twoja opinia: </label>
        <input
          {...register("opinion", { required: true})}
          id="opinion"
          name="opinion"
          type="text"
          placeholder="twoja opinia"
        />
        <button type="submit">Dodaj komentarz</button>
      </form>
    </div>
  );
}

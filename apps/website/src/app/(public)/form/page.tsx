//import styles from './page.module.css';
"use client";
//aplikacja z formularzem wysylająca dane do api

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from 'react';
import * as z from "zod";
import { loginSchema } from "../../zodSchema/login";
import { createReviewInAirtable } from "../../api/services";
import { redirect } from "next/navigation";
import { createReview } from "./action";
import { CreateReviewDto, createReviewSchema } from "../../types";


export default function Index() {
  const [isError, setIsError] = useState(false);
  const [ isPending, startTransition ] = useTransition();
  const { push, refresh} = useRouter();
  const {
    register, 
    handleSubmit,
    formState: { errors},
  } = useForm<CreateReviewDto>({
    resolver: zodResolver(createReviewSchema)
  })

  const clientAction: SubmitHandler<CreateReviewDto> = async (data) => {
    const serverResult = await createReview(data);
    console.log({serverResult})
    if (serverResult.status === 'error') {
      setIsError(true);
    } else {
      startTransition(() => push('/'));
      startTransition(() => refresh());
    }
  }

    return (
    <div className="bg-slate-400">
        <h1 className="mt-2">Form reviews</h1>
        {isError && <p>Oh no server errror!</p>}
        {isPending && <p>Loading...</p>}
        <form onSubmit={handleSubmit(clientAction)} className="p-4">
            <input {...register('content')} id="content" />
            {errors.content && <p>{errors.content.message}</p>}
            <input {...register('author')} id="author" className="ml-2"/>
            {errors.author && <p>{errors.author.message}</p>}
            <button type="submit" className="bg-green-200 ml-2 p-2">Wyslij</button>
        </form>
        
    </div>
);
}



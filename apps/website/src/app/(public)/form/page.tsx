//import styles from './page.module.css';
"use client";
//aplikacja z formularzem wysylająca dane do api

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState, useTransition } from 'react';
import { createReview } from "./action";
import { CreateReviewDto, createReviewSchema } from "../../types";

import { Button } from '@org/common-ui';


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
    console.log('form:', {serverResult})
    if (serverResult.status === 'error') {
      setIsError(true);
    } else {
      startTransition(() => push('/'));
      startTransition(() => refresh());
    }
  }

    return (
    <div className="bg-slate-400 w-96 ml-3">
        <h1 className="mt-2 pl-2 text-lg">Form reviews:</h1>
        {isError && <p>Oh no server errror!</p>}
        {isPending && <p>Loading...</p>}
        <form onSubmit={handleSubmit(clientAction)} className="p-4 flex flex-col space-y-4">
            <textarea 
              {...register('content')} 
              id="content" 
              className="h-40 w-48 pl-2 break-words whitespace-pre-wrap" 
              placeholder="content"
            />
            {errors.content && <p>{errors.content.message}</p>}
            <input 
              {...register('author')} 
              id="author" 
              className="w-48 pl-2" 
              placeholder="author"
            />
            {errors.author && <p>{errors.author.message}</p>}
            <Button 
              text="Wyślij" 
              type="submit"  
              style="bg-indigo-100 pl-10 pr-10 ml-2 p-2 border-2 border-indigo-300"
            />
        </form>
        
    </div>
);
}



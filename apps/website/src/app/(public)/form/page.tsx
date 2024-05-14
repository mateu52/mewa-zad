//import styles from './page.module.css';
//"use client";
//aplikacja z formularzem wysylająca dane do api

import { zod } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState, useTransition } from 'react';
import * as z from "zod";
import { loginSchema } from "../../zodSchema/login";
import { createReviewInAirtable } from "../../api/services";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createReview } from "./action";


export default function Index() {
  const formAction = async (formData: FormData) => {
    'use server'
    const serverResult = await createReview(formData);
    console.log({serverResult})
    if (serverResult.status === 'success') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      await createReviewInAirtable(serverResult.payload!);
      revalidatePath('/') //dane dodane i tak po zatwierdzeniu w admin
      redirect('/')
    }
  }

    return (
    <div className="bg-slate-400">
        <h1 className="mt-2">Form reviews</h1>
        <form action={formAction} className="p-4">
            <input name="content" />
            <input name="author" className="ml-2"/>
            <button type="submit" className="bg-green-200 ml-2 p-2">Wyslij</button>
        </form>
        
    </div>
);
}
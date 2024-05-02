//import styles from './page.module.css';
//"use client";
//aplikacja z formularzem wysylająca dane do api

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "./zodSchema/login";
import { CreateReviewDto } from "./types";
import { createReviewInAirtable } from "./api/services";

const createReview = async (formData: FormData) => {
  'use server';

  const review: CreateReviewDto = {
    content: formData.get('content') as string,
    author: formData.get('author') as string,
  }
  await createReviewInAirtable(review);
}


export default function Index() {
  

  return (
    <div>
      <h1 className="mt-2">Form reviews</h1>
      <form action={createReview}>
        <input name="content" />
        <input name="author" />
        <button type="submit" className="bg-red-200">Wyslij</button>
      </form>
      
    </div>
  );
}

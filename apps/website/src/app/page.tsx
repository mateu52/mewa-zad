//import styles from './page.module.css';
import { FormEvent } from "react";
export default function Index() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData,
    })
    //const data = await response.json();
  }
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input type="text" name="opinion" />
        <button type="submit">Dodaj komentarz</button>
      </form>
    </div>
  );
}

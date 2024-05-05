import { RequestOptions } from "https";

export const fetchReviews = async () => {
    // noStore();
    console.log('hej');
    console.log('token: ', process.env.NX_API_TOKEN, process.env);
    const response = await fetch(
      `https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NX_API_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data.records;
  }

  export const postReview = async ( id:number, accept:boolean, checked:boolean) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.NX_API_TOKEN}`);
    
    const raw = JSON.stringify({
      "records": [
        {
          "id": id,
          "fields": {
            "accept": accept,
            "to_check": checked
          }
        }
      ]
    });
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow" as RequestRedirect
    };
    fetch("https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  }
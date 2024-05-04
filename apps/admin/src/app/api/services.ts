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
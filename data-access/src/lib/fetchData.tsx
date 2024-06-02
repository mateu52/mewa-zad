export async function fetchData(){
    const response = await fetch(
        `https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews`,
        {
            headers: {
                Authorization: `Bearer ${process.env['NX_API_TOKEN']}`,
            },
        }
    );
    const data = await response.json();
    return data.records;
}

export const fetchReviews = async () => {
    // noStore();
    console.log('hej');
    const response = await fetch(
    `https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews`,
        {
            headers: {
            Authorization: `Bearer ${process.env['NX_API_TOKEN']}`,
            },
        }
    );
    const data = await response.json();
    console.log(data, 'data')

    return data.records;
}
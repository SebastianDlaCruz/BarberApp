export const getAccess = async (data) => {

    const url = 'http://barberappgarin.herokuapp.com/api/user/login';
    try {

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        })

        if (!res.ok) throw new Error('!ops¡ error en la peticion');

        const resText = await res.text();

        const [access] = JSON.parse(resText);

        return {
            access
        }

    } catch (error) {

        console.error(error.statusText);
    }

}
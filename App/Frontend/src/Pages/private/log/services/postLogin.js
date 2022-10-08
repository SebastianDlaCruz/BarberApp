export const postLogin = async (data) => {

    try {

        let res = await fetch('http://barberappgarin.herokuapp.com/api/user/login', {
            method: 'POST',
            body: data,
            headers: { "Content-Type": "application/json" },

        })
        const [respon] = await res.json();

        return respon;

    } catch (e) {
        console.error(e.message);
    }


}


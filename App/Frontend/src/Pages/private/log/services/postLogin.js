export const postLogin = async (data) => {
    try {

        let res = fetch('endpoit', {
            method: 'POST',
            body: FormData(data),
            headers: "Content-Type: application/json-utf8",
        })

        if (!res.ok) throw new Error('ops algo salio mal');

        return true;

    } catch (e) {

        console.error(e.message);
    }
}


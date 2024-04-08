import axios from "axios"

export const loginUser = async (email: string, password: string) => {

    let data;

    const options = {
        method: 'POST',
        url: `${process.env.REACT_APP_GYM_API}/users/login`,
        data: {
            email,
            password
        }
    }
    await axios.request(options)
        .then((res) => {
            data = res.data
        }).catch((e) => {
            return e
        })

    return data
}
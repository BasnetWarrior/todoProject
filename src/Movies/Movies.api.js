import axios from "axios";
export function abc(retry) {
    return new Promise((resolve, reject) => {
        axios
            .get("https://reqres.in/api/users?page=2")
            .then((res:) => {
                resolve(res);
            })
            .catch((e) => reject(e));
    });
}

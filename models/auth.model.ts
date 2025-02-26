import instance from '@/utils/axios.utils';

const auth = {
    login: (data) => {
        console.log("data: ", data);
        let promise = new Promise((resolve, reject) => {
            let url = `login/`;
            instance()
                .post(url, data)
                .then((res) => {
                    console.log("login: ", res);
                    resolve(res.data);
                })
                .catch((error) => {
                    console.log('errorsss: ', error);
                    if (error.response) {
                        reject(error.response.data.error);
                    } else {
                        reject(error);
                    }
                });
        });
        return promise;
    },

    userDetails: () => {
        let promise = new Promise((resolve, reject) => {
            let url = `accounts/userdetails/`;
            instance()
                .get(url)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    console.log('errorsss: ', error);
                    if (error.response) {
                        reject(error.response.data.error);
                    } else {
                        reject(error);
                    }
                });
        });
        return promise;
    },
};

export default auth;

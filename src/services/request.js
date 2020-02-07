export const request = {
    submitLogin(output, response) {
        return new Promise((resolve, reject) => {
            if (output === 'ok') {
                setTimeout(() => resolve(response), 2000)
            } else {
                setTimeout(() => reject(response), 2000)
            }
        })
    }
}
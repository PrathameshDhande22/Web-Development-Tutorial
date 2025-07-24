'use server'

export const SubmitUserNameForm = (username: string) => {
    return new Promise<string>((resolve, _) => {
        setTimeout(() => {
            resolve(username + "loggedin")
        }, 2000);
    })
}
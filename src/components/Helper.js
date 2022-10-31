export const validateEmail = (mail) => {
    if (/^\S+@\S+\.\S+$/.test(mail)) return true
    return false
}
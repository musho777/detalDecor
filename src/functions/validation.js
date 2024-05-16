export const Validation = (value, type) => {
  if (type === 'string' && value == "") {
    return true
  }
  if (type === 'password' && (value == "" || value?.length < 8)) {
    return true
  }
  else {
    return false
  }
}
export const isLowerCase = (text: string) => {
  for(let i = 0; i < text.length; i++){
    const num = text.charCodeAt(i);
    if(num < 97 || num > 122) return false
  }
  return true;
}

export const isUpperCase = (text: string) => {
  for(let i = 0; i < text.length; i++){
    const num = text.charCodeAt(i);
    if(num < 65 || num > 90) return false;
  }
  return true;
}
export function validateForm (data) {
    const { name, surname, mobile, email, nick, userType, city, description } = data;

    if (name === '') {
        return true;
    } else if (surname ===''){
        return true;
    } else if (mobile ===""){
       return true; 
    } else if (email ===""){
        return true;
    } else if (nick === ""){
        return true;
    } else if (userType ==="cook" && city === ""){
        return true;
    } else if (userType ==="cook" && description === ""){
        return true;
    } else {
        return false;
    }
}
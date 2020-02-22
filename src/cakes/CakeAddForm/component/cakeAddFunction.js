export const validateCakeAdd = (cake) => {
    const {name, price, priceForPortion, portionDescription, typeId} = cake;

    if (name === '') {
        return true;
    } else if (price ===''){
        return true;
    } else if (priceForPortion ===""){
       return true; 
    } else if (portionDescription ===""){
        return true;
    } else if (typeId === '-1'){
        return true;
    }else {
        return false;
    }
}
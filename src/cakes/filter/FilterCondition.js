
export const filterCondition = (cake, filterCake, filterChecked, filterTypes, cook, filterCook, filterLocation, filterAllToogle ) => {
    let condition = true;
    let cName = true;
    let cType = true;
    let cGluten = true;
    let cCookName = true;
    let cLocation = true;
    const cookName = `${cook.name} ${cook.surname}`;
    const locationCity = cook.location.city;
   

    if (filterCake !== '' && cake.name.toLowerCase().includes(filterCake.toLowerCase())){
        cName = true;
    }
    
    if (filterCake !== '' && !cake.name.toLowerCase().includes(filterCake.toLowerCase())){
        cName = false;
    }

    if (filterCook !== '' && cookName.toLowerCase().includes(filterCook.toLowerCase())){
        cCookName = true;
    }
    
    if (filterCook !== '' && !cookName.toLowerCase().includes(filterCook.toLowerCase())){
        cCookName = false;
    }

    if (filterLocation !== '' && locationCity.toLowerCase().includes(filterLocation.toLowerCase())){
        cLocation = true;
    }

    if (filterLocation !== '' && !locationCity.toLowerCase().includes(filterLocation.toLowerCase())){
        cLocation = false;
    }

    if (filterChecked && cake.glutenFree === true){
        cGluten = true;
    }

    if(filterChecked && cake.glutenFree === false){
        cGluten = false;
    }

    if (filterTypes.length>0){
        if (filterTypes.includes(cake.typeId)){
            cType = true;
        } else {
            cType = false;
        }
    }
    
    if (filterAllToogle) {
        if (cType && cName && cGluten && cCookName &&cLocation){
            condition = true
        } else {condition = false}
    }

    if (!filterAllToogle) {
        if (cType &&  cGluten && (cName || cCookName || cLocation)){
            condition = true
        } else {condition = false}
    }

    


    return condition;
}

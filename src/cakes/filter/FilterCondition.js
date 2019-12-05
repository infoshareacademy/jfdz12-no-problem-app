const filterCondition = (cake, filterName, checked, selected, cookName, filterCook) => {
    let condition = true;
    let cName = true;
    let cType = true;
    let cGluten = true;
    let cCookName = true;
    
    if (filterName !== '' && cake.name.toLowerCase().includes(filterName.toLowerCase())){
        cName = true;
    }
    
    if (filterName !== '' && !cake.name.toLowerCase().includes(filterName.toLowerCase())){
        cName = false;
    }

    if (filterCook !== '' && cookName.toLowerCase().includes(filterCook.toLowerCase())){
        cCookName = true;
    }
    
    if (filterCook !== '' && !cookName.toLowerCase().includes(filterCook.toLowerCase())){
        cCookName = false;
    }

    if (checked && cake.glutenFree === true){
        cGluten = true;
    }

    if(checked && cake.glutenFree === false){
        cGluten = false;
    }

    if (selected.length>0){
        if (selected.includes(cake.typeId)){
            cType = true;
        } else {
            cType = false;
        }
    }
    
    if (cType && cName && cGluten && cCookName){
        condition = true
    } else {condition = false}

    // console.log('selected', selected, 'typeid', cake.typeId, 'filtername', filterName, 'bezg', cake.glutenFree, 'cod', condition );

    return condition;
}


export default filterCondition ;
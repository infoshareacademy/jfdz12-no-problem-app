
const filterCondition = (cake, filterCake, filterChecked, filterSelected, cook, filterCook) => {
    let condition = true;
    let cName = true;
    let cType = true;
    let cGluten = true;
    let cCookName = true;
    const cookName = `${cook.name} ${cook.surname}`;
    
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

    if (filterChecked && cake.glutenFree === true){
        cGluten = true;
    }

    if(filterChecked && cake.glutenFree === false){
        cGluten = false;
    }

    if (filterSelected.length>0){
        if (filterSelected.includes(cake.typeId)){
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
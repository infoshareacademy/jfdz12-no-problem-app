


const filterCondition = (cake, filterName, checked, selected) => {
    let condition = true;
    let cName = true;
    let cType = true;
    let cGluten = true;
    console.log(this.cooks)

    if (filterName !== '' && cake.name.toLowerCase().includes(filterName.toLowerCase())){
        cName = true;
    }
    
    if (filterName !== '' && !cake.name.toLowerCase().includes(filterName.toLowerCase())){
        cName = false;
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
    
    if (cType && cName && cGluten){
        condition = true
    } else {condition = false}

    //console.log('selected', selected, 'typeid', cake.typeId, 'filtername', filterName, 'bezg', cake.glutenFree, 'cod', condition );
    return condition;
}


export default filterCondition ;
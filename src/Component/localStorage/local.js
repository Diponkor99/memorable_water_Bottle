const localStorageChackData=()=>{
    const data=localStorage.getItem('card');
    if(data){
        return JSON.parse(data)
    }
    return []
}

const addLC=(id)=>{
    const Lc=localStorageChackData();
    Lc.push(id)
    SaveLc(Lc)
}

const SaveLc=(id)=>{
    const card=JSON.stringify(id)
    localStorage.setItem('card',card)
}

const removeLC=(id)=>{
    const remove=localStorageChackData();
    const remaning=remove.filter(idx=>idx !==id )
    SaveLc(remaning)
}
export{addLC , localStorageChackData ,removeLC}
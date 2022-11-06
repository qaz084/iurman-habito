
export const validateUserRegister = (name,value) => {

    if(value?.length===''){
        return false;
    }else{
        return true;
    }
}

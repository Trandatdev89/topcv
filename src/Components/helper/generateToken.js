const generateToken=()=>{
    let htmlString="ASDFGHJKLQWERTYUIOPZXCVBNM1234567890asdfghjklqwertyuiopzxcvbnm";
    let token="";
    for(let i=0;i<20;i++){
        token+=htmlString.charAt(Math.floor(Math.random()*htmlString.length));

    }
    return token;
}

export default generateToken;
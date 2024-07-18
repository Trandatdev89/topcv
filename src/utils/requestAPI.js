const API_DOMAIN="http://localhost:3002/";


// https://json-server-topcv.onrender.com/


export const get=async(path)=>{
    const response=await fetch(API_DOMAIN+path);
    const data=await response.json();
    return data;
}

export const post=async(path,dataObj)=>{
    const result = await fetch(API_DOMAIN+path, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
      const data = await result.json();
      return data;
}

export const Delete=async (path,id)=>{
    const res=await fetch(`${API_DOMAIN}${path}/${id}`, {
        method: "DELETE",
    })
    const data=res.json();
    return data;
}

export const patch=async (path,id,dataObj)=>{
    const result = await fetch(`${API_DOMAIN}${path}/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataObj),
      });
      const data = await result.json();
      return data;
}
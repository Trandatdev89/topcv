import {Line} from "@ant-design/plots";
import { useEffect, useState } from "react";

function Chart(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json")
        .then(res=>res.json())
        .then(data=>{
            setData(data);
        })
    },[]);
    const config={
        data:data,
        xField:"year",
        yField:"value",
        slider:{
            start:0,
            end:1
        },
        seriesField:"category",
        animation: {
            appear: {
              animation: 'path-in',
              duration: 5000,
            },
        },
        smoth:true
    }
    return(
        <>
          <Line {...config}/>
        </>
    )
}

export default Chart;
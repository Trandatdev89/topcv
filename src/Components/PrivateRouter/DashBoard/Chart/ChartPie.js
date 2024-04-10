import { Pie } from '@ant-design/plots';
import { useEffect, useState } from 'react';
import { get } from '../../../../utils/requestAPI';

function ChartPie(){
  const [dataChart,setDataChart]=useState([]);
  let [numberChart,setNumberChart]=useState(0);
  useEffect(()=>{
    const fetchAPI=async()=>{
      const res=await get("cv");
      for(let i=0;i<res.length;i++){
        if(res[i].statusRead===true){
          setNumberChart(numberChart+=1);
        }
      }
      setDataChart(res);
    }
    fetchAPI();
  },[])
  
  const dat=parseInt(((numberChart/dataChart.length)*100).toFixed(0));
    const data = [
        {
          type: 'CV đã xem',
          value: dat,
        },
        {
          type: 'CV chưa xem',
          value: 100-dat,
        }
      ];
      const config={
        data:data,
        appendPadding: 10,
        angleField:"value",
        colorField:"type",
      }
    return(
        <>
          <Pie {...config} />
        </>
    )
}

export default ChartPie;
import { Column } from "@ant-design/plots";

function ChartColumns(){
    const data = [
        {
          type: 'sales',
          statisic: 38,
        },
        {
          type: 'Hr',
          statisic: 52,
        },
        {
          type: 'Tester',
          statisic: 61,
        },
        {
          type: 'DEV',
          statisic: 145,
        },
        {
          type: 'QA',
          statisic: 48,
        },
        {
          type: 'QC',
          statisic: 38,
        },
        {
          type: 'Manager',
          statisic: 38,
        }
    ]
    const config={
        data:data,
        xField:"type",
        yField:"statisic",
        smooth:true
    }
    return(
        <>
          <Column {...config}/>
        </>
    )
}

export default ChartColumns;
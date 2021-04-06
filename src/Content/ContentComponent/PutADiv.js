export const PutADiv = ({givenProps}) =>{
    const [divDisabled,number] = givenProps

    return (
            <div
            style={divDisabled ? {width:'200px',height:'200px',pointerEvents: "none", opacity: "0.4",backgroundColor:'red'} : {}}
            >
            {number}
            </div>
    )
}
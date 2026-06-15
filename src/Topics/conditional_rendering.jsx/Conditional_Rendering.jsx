const Conditional_Rendering = () => {
    
    let status = true;
    return (
        <div>
            {status === true ? <h1>🥳Success 1</h1>: <h1>😵‍💫 failure1</h1>} 

            {status && <h1>🥳Success2</h1>}

            {/* {status ?? <h1>😵‍💫 failure3</h1>} */}

            {status?.map(()=>{
                
            })}
        </div>
    );
}

export default Conditional_Rendering;
import Child from "./Child"

const Parent = () => {
    let username = "Prakash";
    console.log(username);

    return (
        <div>
            <Child name={username}/>
        </div>
    )
}

export default Parent
const Jsx_Expression = () => {
    // let username = "Prakash";
    // let age =23;
    // let email="example@gmail.com";

    let data = {
        username:"Prakash",
        age:23,
        email:"example@gmail.com"
    }
    return(
        <div>
            <h1>JSX Expression</h1>
            <p>jsx helps to write html in javascript</p>

            <h2>Hello {data.username}</h2>
            <h3>Age: {data.age}</h3>
            <h3>Email: {data.email}</h3>
        </div>
    )
}

export default Jsx_Expression
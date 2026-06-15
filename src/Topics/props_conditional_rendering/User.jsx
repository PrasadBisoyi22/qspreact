const User = (props) => {
    console.log(props)
    const{data:{username,age,bike}} = props
    console.log(username);
    return(
        <div>
            {
                bike && <img src={bike} alt={username} width={400} />
            }
            <h1>{username}</h1>
            <hr/>
        </div>
    );
}

export default User;
// String , number , boolean , array, object access in jsx expression

const Jsx_Task = () => {
    let username = "Prakash";
    let age =23;
    let email="example@gmail.com";
    let arr = ['a','b','c','d'];
    let obj = {
        username:"Prakash",
        age:23,
        email:"example@gmail.com"
    }


    return(
        <div>
            
            <h2>Hello {username}</h2>
            <h3>Age: {age}</h3>
            <h3>Email: {email}</h3>
            <h3>Array: {arr.map((item,index) => {return <li>{index+1}. {item}</li>})}</h3>
            <h3>Object: {Object.values(obj).map((item,index) => {return <li>{index+1}. {item}</li>})}</h3>
        
        </div>
    );
}
export default Jsx_Task;
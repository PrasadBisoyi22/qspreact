import User from "./User"
const Props_Conditional = () => {
    const data = [
        {
            username:"Prakash",
            age:23,
            email:"example@gmail.com",
            bike:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
        },
        {
            username:"Prakash2",
            age:23,
            email:"example@gmail.com",
            bike:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
        },
        {
            username:"sundari",
            age:23,
            email:"example@gmail.com",
            bike:null
        }
    ]
    return(
        <div>
            {data.map((ele)=>{
                return <User key={ele.email} data={ele}/>
            })
            }

        </div>
    );
}
export default Props_Conditional
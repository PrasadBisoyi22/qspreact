const Jsx_Rules = () => {
    let demo = 'hii';
    let arr = ['a', 'b', 'c', 'd'];
    return (
        <div>
            <h1>JSX Rules</h1>

            {
                //jsx Expression 
                // we can access te js but we can't create the js

                // let deme = hii;
                //demo = hello;
                // rules
                // 1. We can't declare js variables but we can acccess it
                //2. we can't use use conditional statement like if else switch
                //3. we can't use loop like for while , do while for in, for of,
            }
            {arr.map((item,index) => {
                return <li>{index+1}. {item}</li>;
            })}
        </div>
    );
};

export default Jsx_Rules;
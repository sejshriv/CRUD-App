import {v4 as uuid} from "uuid";

let users=[
    {name:"Sejal Shrivastava",email:"sejal@gmail.com",contact:"8864533352",id:"htfjkbxg78"},
    {name:"Priya Gupta",email:"priya@gmail.com",contact:"7685775948",id:"njkvhcd97ln"},
    {name:"Ranjan Sahu",email:"ranjan@gmail.com",contact:"9877679865",id:"hbgftkhi0"},
    {name:"Yami Gautam",email:"yami@gmail.com",contact:"8418974854",id:"tfrdseshi9"},
    {name:"Lucky Takle",email:"lucky@gmail.com",contact:"966128800",id:"xhnklgk76"},
    {name:"Lee Bond",email:"lee@gmail.com",contact:"5488216422",id:"ghkuhln54"},
];

export const getUsers=(req,res)=>{
    res.send(users);
};

export const createUser=(req,res)=>{
    const user=req.body;
    users.push({...user,id:uuid() });
    res.send("User added Succesfully !! ");
}

export const getUser = (req,res)=>{
    const singleUser= users.filter((user)=>user.id == req.params.id );
    res.send(singleUser);

}

export const deleteUser = (req,res)=>{
    users=users.filter((user)=> user.id != req.params.id );
    res.send("User Delete Successfully  !!");
}

export const updateUser = (req,res)=>{
    const user = users.find((user)=> user.id ===req.params.id);

    user.name = req.body.name;
    user.email=req.body.email;
    user.contact=req.body.contact;

    res.send("User Updated Successfully !!");
}
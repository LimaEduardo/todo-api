const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 

/*var id = "59c26a060957e91697407d2f11";

if (!ObjectId.isValid(id)){
    console.log('ID not valid');
}*/

/*Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});*/

/*Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));*/

User.findById("59b591f2a06329525b7433e1").then((user) => {
    if (!user) {
        return console.log("Unable to find user");
    }

    console.log(JSON.stringify(user,undefined,4));
}, (e) => {
    console.log(e);
});

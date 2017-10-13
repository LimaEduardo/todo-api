const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 

/*Todo.remove({}).then((result) => {
    console.log(result);
})*/

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '59e0be252e39326c33b3ac9b'}).then((todo) => {

});

Todo.findByIdAndRemove('59e0be252e39326c33b3ac9b').then((todo) => {
    console.log(todo);
});
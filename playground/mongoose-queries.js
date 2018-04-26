const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '5ae13657bbe8853c20b3e8fb';
var id = '5ae13657bbe8853c20b3e8fb';
var userId = '5adec05cc69884a04a8d74ba';

if(!ObjectID.isValid(id)) {
  console.log('Id not valid');
}

if(!ObjectID.isValid(userId)) {
  console.log('UserId not valid');
}

Todo.find({
  _id: id
}).then((todos) => {
  console.log('Todos: ' + todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log('Todo: ' + todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('TodoById: ' + todo);
}).catch((e) => {
  return console.log(e);
});

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('UserId not found');
  }
  console.log('UserById: ' + user);
}).catch((e) => {
  return console.log(e);
});





const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5ae24c037d74151020031953'}).then((result) => {
  console.log(todo);
});

Todo.findOneAndRemove('5ae24c037d74151020031953').then((todo) => {
  console.log(todo);
});

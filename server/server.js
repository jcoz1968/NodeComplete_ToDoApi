var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
      type: String,
      required: true,
      minLength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
});

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('unable to save Todo.', err);
// });


// var cozTodo = new Todo({
//   text: 'Walk at the park',
//   completed: false,
//   completedAt: 123654
// });

// cozTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('unable to save Todo.', err);
// });

// var otherTodo = new Todo({});

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// });

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});

var cozUser = new User({
  email: 'jcoz1968@gmail.com'
});

cozUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
});

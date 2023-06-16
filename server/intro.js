
const { default: mongoose } = require("mongoose");
const { Schema } = mongoose;

const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect(
  "mongodb+srv://Shahin:dpStrMMw7RapXzHQ@academy.yjpmeka.mongodb.net/academy"
);
let todoSchema = new Schema({
  title: String,
  completed: { type: Boolean, default: false },
});

let Todo = mongoose.model("Todos",todoSchema);

app.get("/api/todos", (req, res) => {
  Todo.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.post("/api/todos", (req, res) => {
  let todo = new Todo({
    title: req.body.title,
  });

  todo.save();

  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  let id = req.params.id;
  Todo.findByIdAndRemove(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.delete("/api/todos", (req, res) => {
  Todo.deleteMany({completed:true})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


app.put("/api/todos/:id", (req, res) => {
  let id = req.params.id;
  Todo.findById(id)
    .then((todo) => {
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
      
      todo.completed = !todo.completed; 
      return todo.save();
    })
    .then((updatedTodo) => {
      res.json(updatedTodo);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


app.listen(3000);

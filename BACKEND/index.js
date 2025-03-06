import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
const app = express();

// Middleware should be set up BEFORE defining routes
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aymane2021',
    port: 3306,
    database: "todolist",
});

// Keep your root endpoint
app.get("/", (req,res) => {
    const q = "SELECT * FROM tasks";
    db.query(q, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    });
});

// Add GET endpoint for /tasks
app.get("/tasks", (req,res) => {
    const q = "SELECT * FROM tasks";
    db.query(q, (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    });
});

app.post("/tasks", (req, res) => {
    console.log(req.body.taskName);
    const value=req.body.taskName;
    const q= "INSERT INTO tasks (taskName) VALUES (?)";

    db.query(q,[value], (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const { taskName } = req.body;

    const q = 'UPDATE tasks SET taskName = ? WHERE taskId = ?';

    db.query(q, [taskName, taskId], (err, result) => {
        if (err) return res.json(err);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.json({ message: 'Task updated successfully' });
    });
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const q = 'DELETE FROM tasks WHERE taskId = ?';
    db.query(q, [taskId], (err, result) => {
        if (err) return res.json(err);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        return res.json({ message: 'Task deleted successfully' });
    });
});

app.listen(8080, () => {
    console.log("Connected to Backend!");
});
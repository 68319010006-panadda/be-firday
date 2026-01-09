const express = require('express');

const app = express();
const PORT = 3000;

 app.use(express.json());
 let items = [
    { id: 1, name: 'Item 1Panadda', description: 'my frist name' },
    { id: 2, name: 'Nadia', description: '0822614831' }
];

app.get('/api/items', (req, res) => {
    res.json(items);
});

app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
});

app.post('/api/items',(req,res) =>{
    const newItem={
        id: items.length +1,
        name: req.body.name,
        description: req.body.description
    }
    items.push(newItem);
    res.status(201).json(newItem);
})

app.delete('/api/items/:id',(req,res)=>{
    const index  = items.findIndex(i => i.id === parseInt(req.params.id));
    if  (index === -1) return res.status(404).json({message: 'ltem not found'});
    items.splice(index,1);
    res.json({message:'item deleted'});
})
console.log("hi 2026");

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 

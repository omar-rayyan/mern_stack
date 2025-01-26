import { Company } from './Company.js';
import { User } from './User.js';
import express from 'express';

const app = express();
const port = 8000;

app.get('/api/users/new', (req, res) => {
    const newUser = new User();
    res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
    const newCompany = new Company();
    res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
    const newUser = new User();
    const newCompany = new Company();
    res.json({ user: newUser, company: newCompany });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
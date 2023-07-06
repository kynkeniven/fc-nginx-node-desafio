const express = require('express')
const { queryPromise } = require('./queryPromise')


async function createApp() {
    const app = express()
    const sqlTable = `CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))`;
    await queryPromise.query(sqlTable)

    const sql = `INSERT INTO people(name) values('John Doe')`
    await queryPromise.query(sql)

    app.get('/', async (req,res) => {
        const selectPeople = `SELECT name FROM people`
        const allPeople = await queryPromise.query(selectPeople)

        const html = `<h1>Full Cycle1</h1>\n
        <ul>
        ${allPeople.map(people => `<li>${people.name}</li>`).join('')}
        </ul>`
    
        res.send(html)
        
    })
    return app
}

module.exports = createApp
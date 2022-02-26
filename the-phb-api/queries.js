const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'phoneBook',
    password: 'postgres',
    port: 5432,
})

const getContacts = (request, response) => {
    pool.query('SELECT * FROM tbl_phonebook ORDER BY name_contact ASC',(error, results) => {
        if(error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getContactById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM tbl_phonebook WHERE id_contact = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
    })
}

const createContact = (request, response) => {
    const { name_contact, email, cell_phone, path_image } = request.body

    pool.query('INSERT INTO tbl_phonebook (name_contact, email, cell_phone, path_image) VALUES ($1, $2, $3, $4)', [name_contact, email, cell_phone, path_image], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateContact = (request, response) => {
    const id = parseInt(request.params.id)
    const { name_contact, email, cell_phone, path_image } = request.body

    pool.query(
        'UPDATE tbl_phonebook SET name_contact = $1, email = $2, cell_phone = $3, path_image = $4 WHERE id_contact = $5',
        [name_contact, email, cell_phone, path_image, id],
        (error,results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Contact modified with ID: ${id}`)
        }
    )
}

const deleteContact = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM tbl_phonebook WHERE id_contact = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Contact deleted with ID: ${id}`)
    })
}

module.exports = {
    getContacts, 
    getContactById,
    createContact,
    updateContact,
    deleteContact,
}
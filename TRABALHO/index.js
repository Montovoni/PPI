const express = require('express');
const path    = require('path');
const mysql   = require('mysql2')
const cors    = require('cors');

const connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: 'admin',
  database: 'poo'
})

connection.connect()

connection.query('SELECT CURRENT_TIMESTAMP()', (err, rows, fields) => {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
})

// criando o objeto express
const app = express();
app.use(cors());
app.use(express.json()); // Adicione esta linha para analisar os dados JSON no corpo da solicitação
app.use("/",express.static(path.join(__dirname,'client')))

// rota get
app.get("/api",(req, res)=>{
res.type("json");
res.send('{"msg":"HELLO WORLD FROM GET"}');

})


// ----------------------------------------------------- 'SISTEMA' -----------------------------------------------------------

// INSERINDO REGISTROS NA TABELA tb00_sistema - CREATE
app.post('/sistema', (req, res) => {
	
  const { no_sistema, nu_versao, de_versao, dh_versao } = req.body;
  const query = 'INSERT INTO tb00_sistema (no_sistema, nu_versao, de_versao, dh_versao) VALUES (?, ?, ?, ?)';
  connection.query(query, [no_sistema, nu_versao, de_versao, dh_versao], (err, result) => 
  
  {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao criar um novo registro na tabela tb00_sistema.' });
    } else {
      res.status(201).json({ message: 'Novo registro criado com sucesso.' });
    }
  });
});

// SELECIONAR A TABELA tb00_sistema - READ
app.get('/sistema',  (req, res)=> {
	
    connection.connect()
    connection.query("SELECT * FROM tb00_sistema", function (err, rows,fields) 
	
	{		
    if (err) throw err;
            if (!err && rows.length > 0) {
                res.json(rows);
            } else {
                res.json([]);
            }
        });
        //connection.end()
    }
);

// SELECIONAR O REGISTRO 'ID' DA TABELA tb00_sistema - READ
app.get('/sistema/:id', (req, res) => {
	
    connection.connect();
    connection.query("SELECT * FROM tb00_sistema WHERE id_sistema = ?", [req.params.id], function (err, rows, fields) 
	
	{	
        if (err) { 
			throw err;
        }
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(201).json({ message: 'Registro não encontrado na tabela tb00_sistema.' });
        }
    });
    // connection.end();
});

// ATUALIZAR O REGISTRO COM 'ID' DA TABELA tb00_sistema - UPDATE
app.put('/sistema/:id', (req, res) => {
	
  const { id } = req.params;
  const { no_sistema, nu_versao, de_versao, dh_versao } = req.body;
  const query = 'UPDATE tb00_sistema SET no_sistema = ?, nu_versao = ?, de_versao = ?, dh_versao = ? WHERE id_sistema = ?';
  connection.query(query, [no_sistema, nu_versao, de_versao, dh_versao, id], (err, result) => 
  
  {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar o registro da tabela tb00_sistema.' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Registro não encontrado.' });
    } else {
      res.status(200).json({ message: 'Registro atualizado com sucesso.' });
    }
  });
});

//EXCLUIR UM REGISTRO JÀ EXISTENTE NA TABELA tb00_sistema
app.delete('/sistema/:id', (req, res) => {
	
  const { id } = req.params;
  const query = 'DELETE FROM tb00_sistema WHERE id_sistema = ?';
  
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir o registro da tabela tb00_sistema.' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Registro não encontrado.' });
    } else {
      res.status(200).json({ message: 'Registro excluído com sucesso.' });
    }
  });
});

// ----------------------------------------------------- 'DISPOSITIVO'------------------------------------------------------

// INSERINDO REGISTROS NA TABELA tb01_dispositivo - CREATE
app.post('/dispositivo', (req, res) => {
	
  const { no_mc, dh_inclusao } = req.body;
  const query = 'INSERT INTO tb01_dispositivo (no_mc, dh_inclusao) VALUES (?, ?)';
  connection.query(query, [no_mc, dh_inclusao], (err, result) => 
  
  {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao criar um novo registro na tabela tb01_dispositivo.' });
    } else {
      res.status(201).json({ message: 'Novo registro criado com sucesso.' });
    }
  });
});

// SELECIONAR A TABELA tb01_dispositivo - READ
app.get('/dispositivo',  (req, res)=> {
	
    connection.connect()
    connection.query("SELECT * FROM tb01_dispositivo", function (err, rows,fields) 
	
	{		
    if (err) throw err;
            if (!err && rows.length > 0) {
                res.json(rows);
            } else {
                res.json([]);
            }
        });
        //connection.end()
    }
);

// SELECIONAR O REGISTRO 'ID' DA TABELA tb01_dispositivo - READ
app.get('/dispositivo/:id', (req, res) => {
	
    connection.connect();
    connection.query("SELECT * FROM tb01_dispositivo WHERE id_mc = ?", [req.params.id], function (err, rows, fields) 
	
	{	
        if (err) { 
			throw err;
        }
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(201).json({ message: 'Registro não encontrado na tabela tb01_dispositivo.' });
        }
    });
    // connection.end();
});

// ATUALIZAR O REGISTRO COM 'ID' DA TABELA tb01_dispositivo - UPDATE
app.put('/dispositivo/:id', (req, res) => {
	
  const { id } = req.params;
  const { no_mc, dh_inclusao } = req.body;
  const query = 'UPDATE tb01_dispositivo SET no_mc = ?, dh_inclusao = ? WHERE id_mc = ?';
  
  connection.query(query, [no_mc, dh_inclusao, id], (err, result) => {
	  
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar o registro da tabela tb01_dispositivo.' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Registro não encontrado.' });
    } else {
      res.status(200).json({ message: 'Registro atualizado com sucesso.' });
    }
  });
});

//EXCLUIR UM REGISTRO JÀ EXISTENTE NA TABELA tb01_dispositivo
app.delete('/dispositivo/:id', (req, res) => {
	
  const { id } = req.params;
  const query = 'DELETE FROM tb01_dispositivo WHERE id_mc = ?';
  
  connection.query(query, [id], (err, result) => {
	  
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir o registro da tabela tb01_dispositivo.' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Registro não encontrado.' });
    } else {
      res.status(200).json({ message: 'Registro excluído com sucesso.' });
    }
  });
});


// ----------------------------------------------------- 'TEMPERATURA'------------------------------------------------------

// INSERINDO REGISTROS NA TABELA tb02_temperatura - CREATE 
app.post('/temperatura', (req, res) => {
	
  const { id_mc, dh_inclusao, dh_amostra, nu_temp, sg_escala } = req.body;
  const query = 'INSERT INTO tb02_temperatura (id_mc, dh_inclusao, dh_amostra, nu_temp, sg_escala) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [id_mc, dh_inclusao, dh_amostra, nu_temp, sg_escala], (err, result) => 
  
  {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao criar um novo registro na tabela tb02_temperatura.' });
    } else {
      res.status(201).json({ message: 'Novo registro criado com sucesso.' });
    }
  });
});

// SELECIONAR A TABELA tb02_temperatura - READ
app.get('/temperatura',  (req, res)=> {
	
    connection.connect()
    connection.query("SELECT * FROM tb02_temperatura", function (err, rows,fields) 
	
	{		
    if (err) throw err;
            if (!err && rows.length > 0) {
                res.json(rows);
            } else {
                res.json([]);
            }
        });
        //connection.end()
    }
);

// SELECIONAR O REGISTRO COM 'ID' DA TABELA tb02_temperatura - READ 
app.get('/temperatura/:id', (req, res) => {
	
    connection.connect();
    connection.query("SELECT * FROM tb02_temperatura WHERE id_temp = ?", [req.params.id], function (err, rows, fields) 
	
	{	
        if (err) { 
			throw err;
        }
        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.status(201).json({ message: 'Registro não encontrado na tabela tb02_temperatura.' });
        }
    });
    // connection.end();
});

// ATUALIZAR O REGISTRO COM 'ID' DA TABELA tb02_temperatura - UPDATE
app.put('/temperatura/:id', (req, res) => {
	
  const { id } = req.params;
  const { id_mc, dh_inclusao, dh_amostra, nu_temp, sg_escala } = req.body;
  const query = 'UPDATE tb02_temperatura SET id_mc = ?, dh_inclusao = ?, dh_amostra = ?, nu_temp = ?, sg_escala = ? WHERE id_temp = ?';
  
  connection.query(query, [id_mc, dh_inclusao, dh_amostra, nu_temp, sg_escala, id], (err, result) => 
  
  {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao atualizar o registro da tabela tb02_temperatura.' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'registro não encontrada.' });
    } else {
      res.status(200).json({ message: 'Registro atualizado com sucesso.' });
    }
  });
});

//EXCLUIR UM REGISTRO JÀ EXISTENTE NA TABELA tb02_temperatura
app.delete('/temperatura/:id', (req, res) => {
	
  const { id } = req.params;
  const query = 'DELETE FROM tb02_temperatura WHERE id_temp = ?';
  
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Erro ao excluir o registro da tabela tb02_temperatura.' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Registro não encontrado.' });
    } else {
      res.status(200).json({ message: 'Registro excluído com sucesso.' });
    }
  });
});

//--------------------------------------------------------------------------------------------------------------------------

const PORT = 5000;
// 
app.listen(PORT, ()=>{
  console.log(`Server rodando na porta ${PORT}`);
});


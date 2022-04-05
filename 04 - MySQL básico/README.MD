<h1 align="center">Formação Node.js 💻</h1>

<h2 align="center">  
  
  :memo:
  
  MySQL Básico
</h2>

## Importante na instalação

- Server Only
- Developer Machine

> mysql -h localhost -u root -p

## Tabelas

- **SHOW DATABASES;**
- **CREATE DATABASE <nome>;**
- **USE <nome do db>;**
- **SHOW TABLES;**

```SQL
CREATE TABLE users(
  name VARCHAR(255),
  email VARCHAR(255),
  age INT
);
```

- **DESCRIBE <nome da table>;**

## INSERT, SELECT, WHERE, DELETE

```SQL
INSERT INTO users(name, email, age) VALUES(
  "Fábio José",
  "bitotajima@hotmail.com",
  21
);
```

---

```SQL
SELECT * FROM users;
```

```SQL
SELECT * FROM users WHERE age = 21;
```

---

```SQL
DELETE FROM users;
```

> deleta TUDO da tabela

```SQL
DELETE FROM users WHERE name = 'Fábio José';
```

---

```SQL
UPDATE users SET name = 'TESTE';
```

> Altera TODOS os linhas da tabela;

```SQL
UPDATE users SET name = 'Fábio José' WHERE age = 21;
```

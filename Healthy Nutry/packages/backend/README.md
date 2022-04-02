**Instruções para instalação e inicialização do projeto**

**_Criar banco de dados Postgres Local_**

1 --> Abra o terminal do seu Sistema Operacional

2 --> sudo -u postgres -i

3 --> psql

4 --> create database nutridb;

5 --> create user healthy with encrypted password 'nutri';

Teste para ver se realmente está configurado

6 --> ALTER USER healthy WITH PASSWORD 'nutri';

7 --> grant all privileges on database nutridb to healthy;

8 --> \c nutridb

9 --> **set timezone='posix/Brazil/East';**

10 --> CREATE EXTENSIO IF NOT EXISTS "uuid-ossp";

11 --> \q

11 --> exit

##### **_Abra o terminal pasta do projeto Backend e rode os comandos_ **

12 --> yarn install ou yarn

13 --> yarn typeorm migration:run

14 --> yarn dev

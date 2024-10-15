# CLI-contacts-app  

This GitHub project was created as part of a homework assignment for a programming course. It focuses on working with Node.js and the File System (fs) module to manage contact information stored in a JSON file. The project allows users to list, add, remove, and update contacts information via command-line interface (CLI).

## Technologies
* Node.js
* FileSystem (fs)
* yargs (npm package)

## Setup

Clone this repo to your desktop and run npm install to install all the dependencies.

```
$ npm install
$ npm start
```
## Usage
These commands use the yargs package to handle command-line arguments for managing contacts.
You can run the following commands in the terminal:


*List all contacts: Displays the entire contact list in a table format.
```
node index.js --action list
```
![list](https://i.ibb.co/cw2M9Pg/list-1.png)


*Get a contact by ID: Fetches and displays contact details for the specified ID.
```
node index.js --action get --id <contact_id>
for example:
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
```
![get](https://i.ibb.co/s21n9zJ/acion.png)


*Add a contact: Adds a new contact with a specified name, email, and phone number.
```
node index.js --action add --name <name> --email <email> --phone <phone>
for example:
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
```
![add](https://i.ibb.co/X7V3fTh/add.png)


*Remove a contact by ID: Deletes the contact with the specified ID.
```
node index.js --action remove --id <contact_id>
for example:
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
```
![remove](https://i.ibb.co/X7zyPLf/remove.png)

screenshots of the command executions:
https://ibb.co/album/h7tcH4

# PMS
Api for a population management system

## Features
- User can create a location
- User can update a location
- User can delete a location
- User can view the list of locations
- User can get a single location

## Requirements
- Node.js v8.x or higher
- npm or yarn
- MongoDB

## Installation
```
$ git clone https://github.com/d3mola/PMS.git
$ cd population-management-system
$ yarn
$ yarn dev               # Start the development environment
$ yarn start             # Run the production build
```

You can access the API via http://localhost:3000/api/

Usage

| HTTP VERB | Description | Endpoints | Payload |
| --- | --- | --- | --- |
| `POST` | Creates a contact | /api/contacts | name(string), phone(string) |
| `GET` | Retrieves a list of all contacts | /api/contacts |
| `GET` | Gets one contact | /api/contacts/:id |
| `PUT` | Updates a contact | /api/contacts/:id | |
| `DELETE` | Deletes a contact | /api/contacts/:id |
| `POST` | Sends a message | /api/messages | message(string e.g. 'hello there!!'), sender(string e.g. '08032423425'), receiver(string e.g. '09024598752') |
| `GET` | Reads a message | /api/messages/:id |


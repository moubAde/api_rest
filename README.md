# API REST

Tutorial api rest with node js and mongodb

## Table des matières

- [Technologies](#Technologies)
- [Installing](#Installing)
- [Endpoints](#Endpoints)

## Technologies

- [Node JS](https://nodejs.org/fr/about/)
- [express](https://www.npmjs.com/package/express)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [mongodb](https://www.mongodb.com/fr)
- [mongoose](https://mongoosejs.com/)

## Installing

```
npm install
npm start
```

The local server run on port 30010

## Endpoints

- [Root](#Root)

---

## Root

Api root.

**URL** : `/`

**Method** : `GET`

**Headers** : `Content-Type: application/x-www-form-urlencoded`

#### Success Response

**Code** : `200 OK`

**Content example**

```text
server Node and Express is listening on ${PORT}
```

---

- [SkyImage](#SkyImage)

---

## SkyImage

Get sky image.

**URL** : `/sky.jpeg`

**Method** : `GET`

**Headers** : `Content-Type: application/x-www-form-urlencoded`

#### Success Response

**Code** : `200 OK`

**Content example**
<img src="./public/sky.jpeg" alt="Screenshot" height="48%" width="48%">

---

- [FootballImage](#FootballImage)

---

## FootballImage

Get football image.

**URL** : `/football.jpeg`

**Method** : `GET`

**Headers** : `Content-Type: application/x-www-form-urlencoded`

#### Success Response

**Code** : `200 OK`

**Content example**
<img src="./public/football.jpeg" alt="Screenshot" height="48%" width="48%">

---

- [GetAllContacts](#GetAllContacts)

---

## GetAllContacts

Get all contacts.

**URL** : `/contact`

**Method** : `GET`

**Headers** : `Content-Type: application/x-www-form-urlencoded`

#### Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "created_date": "2020-09-08T09:35:56.879Z",
    "_id": "5f5750aef065b44e9b7b2aa7",
    "firstName": "Mohamed",
    "lastName": "Adegbindin",
    "email": "ade@gmail.com",
    "company": "Personnel",
    "phone": 505721875,
    "__v": 0
  },
  {
    "created_date": "2020-09-08T09:35:56.879Z",
    "_id": "5f5750b1f065b44e9b7b2aa9",
    "firstName": "Mohamed",
    "lastName": "Adegbindin",
    "email": "ade@gmail.com",
    "company": "Personnel",
    "phone": 505721875,
    "__v": 0
  }
]
```

#### Error Response

**Condition** : Something get wrong with the request.

**Code** : `500 BAD REQUEST`

---

- [GetContactWithId](#GetContactWithId)

---

## GetContactWithId

Get contact with id.

**URL** : `/contact/contact_id`

**Method** : `GET`

**Headers** : `Content-Type: application/x-www-form-urlencoded`

#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "created_date": "2020-09-08T09:35:56.879Z",
  "_id": "5f5750aef065b44e9b7b2aa7",
  "firstName": "Mohamed",
  "lastName": "Adegbindin",
  "email": "ade@gmail.com",
  "company": "Personnel",
  "phone": 505721875,
  "__v": 0
}
```

#### Error Response

**Condition** : Something get wrong with the request.

**Code** : `500 BAD REQUEST`

---

- [AddContact](#AddContact)

---

## AddContact

Add a contact.

**URL** : `/contact`

**Method** : `POST`

**Headers** : `Content-Type: application/x-www-form-urlencoded`

**Data constraints**

```text
firstName=Mohamed&lastName=Adegbindin&email=ade@gmail.com&company=Personnel&phone=0505721875
```

#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "created_date": "2020-09-08T09:35:56.879Z",
  "_id": "5f5750aef065b44e9b7b2aa7",
  "firstName": "Mohamed",
  "lastName": "Adegbindin",
  "email": "ade@gmail.com",
  "company": "Personnel",
  "phone": 505721875,
  "__v": 0
}
```

#### Error Response

**Condition** : Something get wrong with the request.

**Code** : `500 BAD REQUEST`

---

- [UpdateContact](#UpdateContact)

---

## UpdateContact

Update a contact.

**URL** : `/contact/contact_id`

**Method** : `PUT`

**Headers** : `Content-Type: application/x-www-form-urlencoded`

**Data constraints**

```text
firstName=Mohamed&lastName=Adegbindin&email=ade@gmail.com&company=Personnel&phone=0505721875
```

#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "created_date": "2020-09-08T09:35:56.879Z",
  "_id": "5f5750aef065b44e9b7b2aa7",
  "firstName": "Mohamed",
  "lastName": "Adegbindin",
  "email": "ade@gmail.com",
  "company": "Personnel",
  "phone": 505721875,
  "__v": 0
}
```

#### Error Response

**Condition** : Something get wrong with the request.

**Code** : `500 BAD REQUEST`

---

- [DeleteContact](#DeleteContact)

---

## DeleteContact

Delete a contact.

**URL** : `/contact/contact_id`

**Method** : `DELETE`

**Headers** : `Content-Type: application/x-www-form-urlencoded`

#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "message": "Delete contact successfully"
}
```

#### Error Response

**Condition** : Something get wrong with the request.

**Code** : `500 BAD REQUEST`

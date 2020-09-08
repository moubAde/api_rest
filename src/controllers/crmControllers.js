const mongoose = require("mongoose");

const crmModels = require("../models/crmModels");

const Contact = mongoose.model("Contact", crmModels.ContactSchema);

const addNewContact = (req, res) => {
  let newContact = new Contact(req.body);
  newContact.save((err, contact) => {
    if (err) res.send(err);
    else res.json(contact);
  });
};

const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) res.send(err);
    else res.json(contact);
  });
};

const getContactWithID = (req, res) => {
  Contact.findById(req.params.idContact, (err, contact) => {
    if (err) res.send(err);
    else res.json(contact);
  });
};

const updateContact = (req, res) => {
  Contact.findOneAndUpdate(
    { _id: req.params.idContact },
    req.body,
    { new: true },
    (err, contact) => {
      if (err) res.send(err);
      else res.json(contact);
    }
  );
};

const deleteContact = (req, res) => {
  Contact.deleteOne({ _id: req.params.idContact }, (err, contact) => {
    if (err) res.send(err);
    else res.json({ message: "Delete contact successfully" });
  });
};

module.exports = {
  addNewContact,
  getContacts,
  getContactWithID,
  updateContact,
  deleteContact,
};

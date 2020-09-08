const mongoose = require("mongoose");

const ContactSchema = require("../models/crmModels");

const Contact = mongoose.model("Contact", ContactSchema);

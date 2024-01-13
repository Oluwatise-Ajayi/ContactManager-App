const getContact =(req, res) => {
    res.status(200).json({ message: "Get all contacts" });
  }
const createContact =(req, res) => {
    console.log(req.body)
    res.status(201).json({ message: "Create new contact" });
  }
const updateContact =(req, res) => {
    res.status(200).json({ message: `Update contacts for ${req.params.id}` });
  }
const getOneContact =(req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}` });
  }
const deleteContact =(req, res) => {
    res.status(200).json({ message:`delete contacts for ${req.params.id}` });
  }


  module.exports = {getContact,createContact,updateContact,getOneContact,deleteContact}
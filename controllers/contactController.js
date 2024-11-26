// const express = require("express")

// @desc get contact 
// @route GET /api/contacts
// @access public
const getContact = (req, res) => {
    res.status(200).json(
        {
            message: `Get all contacts: ${req.params.id}`
        }
    )
}

// @desc Create New contact 
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
    console.log("Body: ", req.body)
    res.status(200).json(
        {
            message: "Create contact."
        }
    )
}

// @desc Create delete contact 
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
    res.status(201).json(
        {
            message: `Delete Contact: ${req.params.id}`
        }
    )
}

// @desc Create Update contact 
// @route UPDATE /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.status(201).json(
        {
            message: `Update contact: ${req.params.id}`
        }
    )
}

module.exports = { getContact, createContact, deleteContact, updateContact }
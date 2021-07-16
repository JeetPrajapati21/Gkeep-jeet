const router = require('express').Router();
const Note = require('../models/Note');
const User = require('../models/User');
const checkAuth = require('../middlewares/check-auth');

//Post

router.post("/", async (req, res) => {
    const newNote = new Note(req.body);
    try {
        const saveNote = await newNote.save();

        res.status(200).json(saveNote);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Update 

router.put("/:id", async (req, res) => {
    try {
        const updatedPost = await Note.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Update checked 

router.put("/checked/:id", async (req, res) => {
    try {
        const updatedPost = await Note.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete 

router.delete("/:id", async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (note.email === req.body.email) {
            try {
                await note.delete();
                res.status(200).json("Note has been deleted!");
            } catch (error) {
                res.status(500).json(error);
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete All Notes 

router.delete("/", async (req, res) => {
    try {
        await Note.deleteMany({email: req.query.email});
        res.status(200).json("Notes have been deleted!");
    } catch(error) {
        res.status(500).json(error);
    }
});

//Get 

router.get("/:id", async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get All Notes 

router.get("/", async (req, res) => {
    const email = req.query.email;
    try {
        let notes;
        if (email) {
            notes = await Note.find({email});
        }

        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
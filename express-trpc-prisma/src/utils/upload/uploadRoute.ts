import express from "express";
import { cloud } from "./cloudinary";
import { upload } from "./multer";

export const uploadRoute = express.Router();

uploadRoute.post("/upload", upload.single("image"), (req, res) => {
    if (req.file) {
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const file = "data:" + req.file.mimetype + ";base64," + b64;
        cloud.uploader.upload(file, (err, result) => {
            if (err) {
                res.status(500).json({
                    sucess: false,
                    error: err
                })
            }
            res.status(200).json({
                sucess: true,
                data: {
                    public_id: result?.public_id
                }
            })
        })
    } else {
        res.status(400).json({
            sucess: false,
            message: "No file sent"
        })
    }
    return;
})
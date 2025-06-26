const UserPhotosModel = require("../models/UserPhotos");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const {cloudinary,storage} =require("../Claudinary/index");
exports.UserUploadedPhotos = [
    upload.single('file'),
    async function (req, res) {
        try {
            const filePath = req.file.path;
            if (!filePath) {
                return res.status(400).json({ msg: "No file uploaded" })
            }
            if (!req.user || !req.user._id) {
                return res.status(401).json({ msg: 'Unauthorized: User not authenticated' });
            }
            const userId =req.user._id;
            const cloudRes = await cloudinary.uploader.upload(filePath, {
                folder: "RoomSyncUserPhotos"
            });
            const imageUrl = cloudRes.secure_url;
            console.log(imageUrl);
            const result =  new UserPhotosModel({
                photos:[{photoUrl:imageUrl}],
                user: userId
            });
            await result.save();
            res.status(200).json({ msg: "Image uploaded and saved", data: result });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ msg: "Something went wrong", error: err.message });
        }
    }
];
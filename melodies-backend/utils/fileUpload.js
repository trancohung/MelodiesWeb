import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + "-" + file.fieldname + ext);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = /mp3|wav|flac|m4a/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  //   const minetype = allowedTypes.test(file.minetype);
  //   console.log("Uploading file:", file.originalname, file.mimetype);
  if (extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only audio files are allowed"), false);
  }
};

const uploadSong = multer({ storage, fileFilter });

export default uploadSong;

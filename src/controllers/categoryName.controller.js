var categoryNameModel = require("../../src/models/categoryName.model");
let categoryNamecontroller = {};
var fs = require("fs");
const path = require("path");
var dir = require("node-dir");

var fsPromises = fs.promises;

const directoryPath = path.join(__dirname, "../../public/images");

categoryNamecontroller.getCategoryName = function(req, res) {
  fs.readdir(directoryPath, function(err, data) {
    console.log("items==========================", data);
    console.log("err", err);
    return res
      .status(200)
      .json({ message: "Show name of category", result: { category: data } });
  });
};

categoryNamecontroller.getStickers = function(req, res) {
  var name = req.params.name;
  const FolderName = path.join(__dirname, "../../public/images/" + name);
  console.log("name====================", req.params.name);
  dir.readFiles(
    FolderName,
    function(err, content, next) {
      if (err) throw err;
      next();
    },
    function(err, files) {
      if (err) throw err;
      console.log("finished reading files:", files);

      return res
        .status(200)
        .json({ message: "Show stickers ", result: { stickers: files } });
    }
  );
};

categoryNamecontroller.download = function(req, res) {
  var name = req.params.name;
  let path = "/var/www/html/meme_server/public/uploads/";
  console.log("path===============>", path);
  fs.mkdir(
    path + name,
    { recursive: true },

    err => {
      console.log("Folder created!");
      return res.status(200).json({ message: "Folder created!" });
    }
  );
};

module.exports = categoryNamecontroller;

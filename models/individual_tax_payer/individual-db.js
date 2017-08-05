var db = global.db;

var Schema = db.Schema;
var studentSchema = new Schema(
    {
        firstname: String,
        lastname: {type: String, default: "Eyarie"},
        middle: {type: String, default: ""},
        createdAt: {type: Date, default: Date.now}
    }
);

// Here the studentSchema is exported as studentModel
module.exports.studentModel = db.model('studs', studentSchema);

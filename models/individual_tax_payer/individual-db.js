var db = global.db;

var Schema = db.Schema;
var individualSchema = new Schema(
    {
        title: String,
        gender: String,
        nationality:String,
        date_of_birth: Date,
        state_of_origin: {type: String, default: ""},
        address: String,
        lga_address: {type: String, default: ""},
        phone: String,
        email: String,
        occupation: String,
        market_associated: String,
        park_associated: String,
        company_category: {type: String, default: ""},
        office_address: String,
        office_lga: String,
        drivers_license: String,
        national_id: String,
        passport_number: String,
        disability: {type: String, default: ""},
        user_id: String
    }
);

// Here the studentSchema is exported as studentModel
module.exports.individualModel = db.model('individual', individualSchema);

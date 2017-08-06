var db = global.db;
var Schema = db.Schema;


var individualSchema = new Schema({

        title: {
      		type: String
      		// required: true
      	},
        firstname: {
      		type: String
      		// required: true
      	},
        lastname: {
      		type: String
      		// required: true
      	},
        gender: {
      		type: String,
      		required: true
      	},
        nationality: {
      		type: String,
      		required: true
      	},
        date_of_birth: {
      		type: Date
      	},
        state_of_origin: {
      		type: String
      	},
        address:{
      		type: String
      	},
        lga_address: {
      		type: String
      	},
        phone: {
      		type: String,
      		required: true
      	},
        email: {
      		type: String
      	},
        occupation: {
      		type: String
      	},
        market_associated: {
      		type: String
      	},
        park_associated: {
      		type: String
      	},
        company_category: {
      		type: String
      	},
        office_address: {
      		type: String
      	},
        office_lga: {
      		type: String
      	},
        drivers_license: {
      		type: String
      	},
        national_id: {
      		type: String
      	},
        passport_number: {
      		type: String
      	},
        disability: {
      		type: String
      	},
        user_id: {
      		type: String,
      		required: true
      	}
    });

module.exports.individualModel = db.model('individual', individualSchema);

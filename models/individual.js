var individualDb = require("./individual_tax_payer/individual-db.js");
// This is used to get specific objects exported.
var individualMods = individualDb.individualModel;

function Individual(){
    Individual.prototype.create = function(properties, callback){
        var ind = new individualMods(properties);
        ind.save(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data !== null ? data.toJSON() : null);
            }
        });
    };

    Individual.prototype.findAll = function(callback){
        individualMods.find({}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };

    Individual.prototype.findById = function(id, callback){
        individualMods.findOne({'_id':id}).lean().exec(function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };


    Individual.prototype.deleteById = function(id, callback){
        individualMods.deleteOne({'_id':id}, function(err, data){
            if(err){
                callback(err);
            } else {
                callback(data);
            }
        });
    };
};

module.exports.Individual = Individual;

const consts = require('./consts'),
      mongoose = require('mongoose'),
      songSchema = require('./song');

var data,
    songArray = [];

module.exports = {
    getAllSongs,
    getSongById,
    getSongByPlayerAndYear,
    connect
};


function connect() {
    mongoose.connect(consts.MLAB_KEY).then( () => {
        console.log("Connected");
    },
    err => {
        console.log(`connection error: ${err}`);
    }
);
}

// get all songs
function getAllSongs() {

    songSchema.find({},
        (err, songs) => {
            if(err){
                console.log(`query error: ${err}`);
            }
            data = songs;
            console.log(data);
        });
        return data;
    }

// get song by id
function getSongById(id) {
    songSchema.find({id: '2'}, (err, song) => {
        if(err){
            console.log(`query error: ${err}`);
        }
        data = song;
        console.log(data);
    });
    return data;
}


// get song by player name & year
function getSongByPlayerAndYear(player1, year1) {
    songSchema.find({}, (err, song) => {
        if(err){
            console.log(`query error: ${err}`);
        }
        for(let i in song){
            if(song[i].year == year1){
                for(let j in song[i].players){
                    if(song[i].players[j].name == player1){
                        songArray.push(song[i]);
                    }
                }
            }
        }
    });
    return songArray;

}

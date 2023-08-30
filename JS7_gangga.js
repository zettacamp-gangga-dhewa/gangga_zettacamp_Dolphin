// Mid task of JavaScript. Will include all previous day's learning:

// Create a variable with type array of object to save song lists with song details
// Create a function to group song based on artists
// Create a function to group song based on genre
// Create a function to group song to play song less than 1 hour with random artists & genres

function songListByArtist(songList,input){
    
    list.forEach((art) => {
        songList.push(art);
    });
    
    const result = songList.filter(song=>song.Artist == input);
    console.log('Sort By Artist :\n',result);
};

function songListByGenre(songList, input){

    list.forEach((gen) => {
        songList.push(gen);
    });
            
    const result = songList.filter(song=>song.Genre == input);
    console.log('Sort By Genre :\n',result);
};

function total(list) {
    const total = list.reduce((acc, dur) => {
        return acc + dur.Duration;
      }, 0);
      
    console.log(+total);

    // let random_index = Math.floor(Math.random() * list.length);
}

const songList = new Array();

const list = [
    {Title : 'Biarlah', Artist : 'Nidji', Genre : 'Pop Rock', Duration : 1},
    {Title : 'Sudah', Artist : 'Nidji', Genre : 'Pop', Duration : 2},
    {Title : 'Arti Sahabat', Artist : 'Nidji', Genre : 'Pop', Duration : 10},
    {Title : 'Cobalah Mengerti', Artist : 'Noah', Genre : 'Rock', Duration : 10},
    {Title : 'Sampai jadi debu', Artist : 'Banda Neira', Genre : 'Folk', Duration : 10},
    {Title : 'F', Artist : 'F', Genre : 'H', Duration : 10},
    {Title : 'G', Artist : 'G', Genre : 'H', Duration :10},
    {Title : 'H', Artist : 'H', Genre : 'H', Duration : 3},
    {Title : 'Boyband', Artist : 'Tipe X', Genre : 'Ska', Duration : 2},
    {Title : 'Seperti para Koruptor', Artist : 'Slank', Genre : 'Rock', Duration : 2}
]

//songListByArtist(songList,'Nidji');
songListByGenre(songList,'Folk');
//total(list);



// isHour(songList);

// var actualTime = time.split(':');
// console.log("The time="+time);
// // while (totalDuration <= 3600) {
    
// }

// let totalDuration = 3


// for(i=0;i<songList.length;i++){
//     // let totalDuration = Duration.split(':');
//     var toSeconds = totalDuration * 60; //+ untuk mengubah string ke integer
//     console.log(toSeconds)
// }



//console.log("Total Seconds="+toSeconds);






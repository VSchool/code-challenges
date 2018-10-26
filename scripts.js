var fs = require( 'fs' );
var path = require( 'path' );

var dailyChallenges = "./daily-challenges/";
var exercises = "./exercises/"

const fileName = "/package.json"
const codeToAdd = `
{
    "name": "code-challenges",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "jest"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "jest": "^23.6.0"
    }
  }
`

function addFiles(pathName, fileName, codeToAdd){
    fs.readdir( pathName, function( err, folders ) {
            console.log(folders)
            if( err ) {
                console.error( "Could not list the directory.", err );
                process.exit( 1 );
            } 

            folders.forEach( function( folder, index ) {
                console.dir(folder)
                fs.stat( "./" + pathName + folder, function( error, stat ) {
                    if( error ) {
                        console.error( "Error stating file.", error );
                        return;
                    }

                    if( stat.isFile() )
                        console.log( "'%s' is a file.");
                    else if( stat.isDirectory() ){
                        console.log( "'%s' is a directory.");
                        console.log("NEW FILE___________________________")
                        console.log(pathName + folder + fileName)
                        fs.writeFile(pathName + folder + fileName, codeToAdd, function(err) {
                            if(err) {
                                return console.log(err);
                            }
                        
                            console.log("The file was saved!");
                        }); 
                    }
                } );
            } );
    } );
}

addFiles(exercises, fileName, codeToAdd)
addFiles(dailyChallenges, fileName, codeToAdd)
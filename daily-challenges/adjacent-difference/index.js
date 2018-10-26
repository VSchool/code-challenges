//your function(s) here

module.exports.sum = function (a, b) {
    return a + b;
}


Code 


for f in ~/Development/v-school/code-challenges/exercises/*;
do       [ -d $f ] && cd $f && (   
echo {
echo  '"name": "code-challenges",'
echo  '"version": "1.0.0",'
echo  '"description": "",'
echo  '"main": "index.js",'
echo  '"scripts": "{"'
echo   '"test": "jest"'
echo  '},'
echo  '"keywords": [],'
echo  '"author": "",'
echo  '"license": "ISC",'
echo  '"devDependencies": {'
echo   ' "jest": "^23.6.0"'
echo  '}'
echo '}'

) > package.json;   done;


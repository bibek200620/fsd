const fs=require('fs').promises;

async function readfileAsync(filepath){
    try{
        const data=await fs.readFile(filepath,'utf-8');
        console.log("file content:",data)
    }catch(error){
        console.error(error)
    }
}

readfileAsync('hello.txt');
console.log("will not wait");
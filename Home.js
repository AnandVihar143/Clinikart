var count = 1;
document.getElementById("img").style.backgroundImage=`url(../ASSETS/${1}.jpg)`

function add()
{
    count++;
    document.getElementById("img").style.backgroundImage=`url(../ASSETS/${count}.jpg)`
    console.log(count);
    if(count == 2)
    {
        count = 0;
    }
}
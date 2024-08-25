var man = prompt('enter man name')
var women = prompt('enter women name')
var loveScore = Math.random();
loveScore = loveScore * 100
loveScore = Math.floor(loveScore) + 1;

if(loveScore >= 70){
    alert('Your love score is ' + loveScore + '%' + ' You love each other like qaays love layla')
}else if(loveScore > 30 && loveScore < 70){
    alert('Your love score is ' + loveScore + '%' )
}
else{
    alert('Your love score is ' + loveScore + '%' + 'You go together like all and water' )
}
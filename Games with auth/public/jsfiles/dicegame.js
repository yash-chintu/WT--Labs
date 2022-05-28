const players= document.querySelector('#no_of_players');
let h=document.querySelector('h1')
let table= document.querySelector('table');
let button=document.querySelector('#forButton');

let player_count;
let plug=0;
let count=0;
let max=0,maxplayer=0,draw=0;

players.addEventListener('change',()=>{

   plug=0,count=0,max=0,maxplayer=0,draw=0; 
   player_count=players.value;
   table.innerHTML='';
   button.innerHTML='';
   button.classList.add('roll');
   if(player_count!=0){
    let btn=document.createElement('BUTTON')
    btn.innerHTML=('Roll');
    btn.classList.add('roll');
    button.appendChild(btn); 
       table.border=1;
       let tr=document.createElement('TR');
    for(let i=1;i<=player_count;i++){
       let th=document.createElement('TH');
       th.innerHTML=`player ${i}`;
       tr.appendChild(th);
   }
   let th=document.createElement('TH');
   th.innerHTML=`Winner`;
   tr.appendChild(th);
   table.appendChild(tr);
}
})

function roll(){
    return Math.floor(Math.random()*6+1);
}



let dice=document.querySelector('.roll');

button.onclick=function(){
    player_count=players.value;
    //console.log(player_count);
    console.log(count);
    let tr;
    let val=parseInt(roll());
    count++;
    if(val>max){
        maxplayer=count;
        max=val;
        draw=0;
    }
    else if(val==max){
        draw=1;
    }
    let td=document.createElement('TD');
     td.innerHTML = `${val}`;
    if(plug===1)
    {
        tr=table.lastChild;
        table.removeChild(table.lastElementChild);
    }
    else{
        plug=1;
    tr=document.createElement('TR');

    }
    tr.appendChild(td);
 
    if(count === parseInt(player_count)){
        
        let td=document.createElement('TD');
        if(draw){
            td.innerHTML='Draw';
        }
        else{
            td.innerHTML=`player ${maxplayer}`;
        }
        tr.appendChild(td);
        
        plug=0;
        count=0;
        maxplayer=0;
        max=0;
        draw=0;

    }
    table.appendChild(tr);

}

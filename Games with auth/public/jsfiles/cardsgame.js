
var suits = ["clubs", "diamonds", "spades", "hearts"];
var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var deck=new Array();

let players=document.querySelector('#no_of_players');
let cards=document.querySelector('#no_of_cards');
let generate=document.querySelector('#generate');
let table=document.querySelector('#cardstable');
let h=document.querySelector('h2');


generate.addEventListener('click', ()=>{
    let pc=players.value;
    let cc=cards.value;
    if(pc==0||cc==0){
        alert("Some fields are missing!!");
    }
    else{
    table.innerHTML='';
    table.border=1;
    let tr=document.createElement("TR");
    for(let i=1;i<=pc;i++){
        let th=document.createElement("TH");
        th.innerHTML=`Player ${i}`;
        tr.appendChild(th);
    }
    table.appendChild(tr);
    pair();
    shuffle();

    let arr=new Array();
    for(let i=0;i<pc;i++){
        arr[i]=0;
       
    }

    let count=0;

    for(let i=0;i<cc;i++){
        let tr=document.createElement("TR");
        for(let j=0;j<pc;j++){
            console.log(parseInt(deck[count].Value));
            let p=parseInt(deck[count].Value);
            arr[j] += p;
            let td=document.createElement("TD");
            if(deck[count].value===1){
                td.innerHTML+=`${deck[count].Value} of A`;
            }
            else if(deck[count].Value===11){
                td.innerHTML+=`${deck[count].Value} of J`;
            }
            else if(deck[count].Value===12){
                td.innerHTML+=`${deck[count].Value} of Q`;
            }
            else if(deck[count].value===13){
                td.innerHTML+=`${deck[count].Value} of K`;
            }
            else
            td.innerHTML+=` ${deck[count].Value} of ${deck[count].Suit}`;
            tr.appendChild(td);
            count++;
        }
        table.appendChild(tr);
    }

    let maxPlayer=0,draw=0;
    for(let i=1;i<pc;i++){
        if(arr[i]>arr[maxPlayer])
            {   
                maxPlayer=i;
                draw=0;
            }
            else if(arr[i]===arr[maxPlayer]){
                draw=1;
            }
    }
    maxPlayer++;
    if(draw){
        h.innerHTML="draw";
    }
    else{
        h.innerHTML=`Player ${maxPlayer} is the winner`;
    }
}
})

function pair(){
    for(var x = 0; x < 4; x++)
	{
		for(var y = 0; y < 13; y++)
		{
			var card = { Suit: suits[x],Value: values[y]};
			deck.push(card);
		}
	} 
    return ;
}

function shuffle(){
    for (var i = 51; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));              
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }     
    return ;
 }
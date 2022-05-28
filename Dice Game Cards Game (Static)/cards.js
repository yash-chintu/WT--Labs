var deck = new Array();
  var suits = ["clubs", "diamonds", "spades", "hearts"];
  var values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var count=0;
  var sum=new Array();
  function playcardsgame(){
    let pc =parseInt( document.getElementById("players").value);
    let sc =parseInt( document.getElementById("sets").value);
    var k=document.getElementById('table2');
    var head = document.createElement('tr');
    pair(suits,values);
    for(var r=0;r<pc;r++){
        var td=document.createElement('td');
        var text =document.createTextNode("Player-"+parseInt(r+1));
        td.appendChild(text);
        head.appendChild(td);
    }
    k.appendChild(head);
    for(var r =0;r<pc;r++)
    {
        sum[r]=0;
    }
    shuffle();
    for(var r=0;r<sc;r++)
    {
        var head = document.createElement('tr');
        for(var c=0;c<pc;c++)
        {
            var td=document.createElement('td');
           // shuffle();
          //  var [i,j]= select();
             var text = document.createTextNode(deck[count].Value+" of "+deck[count].Suit);
             var z = deck[count].Value;
             count++;
            td.appendChild(text);
            head.appendChild(td);
            if(z=="A")
            {
                sum[c]=sum[c]+1;
            }
            else if(z=="J")
            {
                sum[c]=sum[c]+11;
            }
            else if(z=="Q")
            {
                sum[c]=sum[c]+12;           
             }
            else if(z=="K")
            {
                sum[c]=sum[c]+13;            
            }
           else{
                sum[c]=sum[c]+z;           
             }
        }
       k.appendChild(head);
        //setTimeout(5000);
    }
    win(pc);
}

function pair(suits,values){
    for(var x = 0; x < suits.length; x++)
	{
		for(var y = 0; y < values.length; y++)
		{
			var card = { Suit: suits[x],Value: values[y]};
			deck.push(card);
		}
	} 
    return ;
}

function shuffle(){
    for (var i = deck.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));              
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }     
    return ;
 }
 function print(){
     for (var i =0; i<deck.length;i++)
     {
         console.log(deck[i]);
     }
 }

 function win(k)
 {
     var max_index=0;
     for(var i=1;i<k;i++)
     {
         if(sum[i]>sum[max_index])
         {
             max_index=i;
         }
     }
     for(var i=0;i<k;i++)
     {
         if(sum[i]==sum[max_index]&&i!=max_index)
         {
             var u=document.querySelector('.body');
             u.innerHTML+="Draw match";
             return ;
         }
     }
     var b = document.querySelector('.body');
     b.innerHTML+="<p>Winner is Player-"+(max_index+1)+"</p>";
     return ;
 }
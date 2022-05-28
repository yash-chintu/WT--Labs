var value;
var status=0;
var iter=1;
var table= document.getElementById("dicetable");
var row;
var person=[];

function noofdiceplayers(a){

    console.log("changed");
    var status=0;
    var iter=1;
    row='';
    person=[];

    value = a.options[a.selectedIndex].value;


    var html='<tr>'

    for(var i=0;i<value;i++){
        html+='<th id=player' + i + '> player '+ i +'</th>';
        if(i==value-1){
           
            html+='<th> winner </th>'
            html+='<th><button class="rolls" id=roll' + i + ' onclick="clicked()">roll</button></th>  '
        }
    }

    html+='</tr>'
    table.innerHTML=html;
}


function clicked(){

    if(status==0){

        person=[]
        status=1;
        row='<tr>';

        for(var i=0;i<value;i++){

            row+='<th id = '+ i +' > &nbsp;&nbsp;&nbsp;&nbsp;</th>';
            if(i==value-1){
                row+='<th id="winner"> </th>';
            }
        }

        row+='</tr>'
        table.innerHTML+=row;
        for(var i=0;i<value;i++){

            person[i] = document.getElementById(i.toString());

        }
        console.log(person);
        person[iter-1].innerHTML = Math.floor(1+Math.random() * 5);

    }

    else{
        if(iter==value){
            var a=[];
            for(var i=0;i<value;i++){
                a[i]= parseInt(person[i].innerHTML);

            }

            var indexOfMaxValue = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
            var winner = document.getElementById("winner");
            winner.innerHTML="player "+indexOfMaxValue

            status=0;
            iter=1;
            for(var i=0;i<value;i++){
                person[i].removeAttribute('id');
            }
            winner.removeAttribute('id');

        }

        else{
            iter=iter+1;
            console.log(iter);
            person[iter-1].innerHTML = Math.floor(1+Math.random() * 5);
        }


    }

    if(iter==value){
            var a=[];
            for(var i=0;i<value;i++){
                a[i]= parseInt(person[i].innerHTML);

            }

            var indexOfMaxValue = a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
            var winner = document.getElementById("winner");
            winner.innerHTML="player "+indexOfMaxValue

            status=0;
            iter=1;
            for(var i=0;i<value;i++){
                person[i].removeAttribute('id');
            }
            winner.removeAttribute('id');

        }
}
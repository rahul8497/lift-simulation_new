let lift_curr_pos;
let btn=document.getElementsByClassName("btn");
for(let i=0;i<6;i++){
    btn[i].onclick=change;
}
function change(){
    for(let i=0;i<6;i++){
        btn[i].style.backgroundColor='crimson';
    }
    this.style.backgroundColor='green';
    lift_curr_pos=this.innerHTML;
}
let go=document.getElementById("go");
go.onclick=move_lift;
function move_lift(){
    let liftmove=document.getElementById("lift");
    console.log("current position of lift "+lift_curr_pos);
    if(lift_curr_pos==1){
        liftmove.style.transform="translateY(-1px)";
    }
    if(lift_curr_pos==2){
        liftmove.style.transform="translateY(-92px)";
    }
    if(lift_curr_pos==3){
        liftmove.style.transform="translateY(-184px)";
    }
    if(lift_curr_pos==4){
        liftmove.style.transform="translateY(-276px)";
    }
    if(lift_curr_pos==5){
        liftmove.style.transform="translateY(-366px)";
    }
    if(lift_curr_pos==6){
        liftmove.style.transform="translateY(-458px)";
    }
    liftmove.style.transition='1s linear';
}
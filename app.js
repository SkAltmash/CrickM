const firstTeam = document.getElementById("first-team");
const secondTeam = document.getElementById("second-Team");
const cheekWiner = document.querySelector(".cheek-winer");
const  error1 = document.getElementById("error1");
const  error2 = document.getElementById("error2");
const teamname =document.querySelector(".teamname");
const chose = document.querySelector(".chose");
const massage = document.getElementById("massage");
const currentscored = document.getElementById("currentscored");
let tossresult;
let batfirst;
let batsecond;
function toss(){
  let test =0;

  if (firstTeam.value=="")
  {
    error1.innerHTML="Pless enter team name";
    error1.style.color="red";
  }
  else
  {
  error1.innerHTML="";
  test++;
  }
  if (secondTeam.value=="")
  {
      error2.innerHTML="Pless enter team name";
      error2.style.color="red";
  }
  else
  {
  error2.innerHTML="";
  test++;
  }
  if(test==2)
  displaywiner();
}

function displaywiner() {

let winer = Math.round(Math.random()*2+1);
if(winer===3)
winer=1;

if(winer==1)
{
 cheekWiner.innerHTML=`${firstTeam.value} wont the toss`;
 tossresult=`${firstTeam.value} wont the toss`;
 batfirst=firstTeam.value;
batsecond=secondTeam.value;
}
else
{
  cheekWiner.innerHTML=`${secondTeam.value} wont the toss`;
  tossresult=`${secondTeam.value} wont the toss`;
  batfirst=secondTeam.value;
  batsecond=firstTeam.value;
}
teamname.style.display="none";
chose.style.display="flex";
}
function opentobat(){
  cheekWiner.innerHTML=`${tossresult} And open to bat`;
  massage.innerHTML=`${tossresult} And open to bat`;

}
function opentoball(){
 cheekWiner.innerHTML=`${tossresult} And open to ball`;
 massage.innerHTML=`${tossresult} And open to ball`;
}
const contaner= document.querySelector(".contaner");
const scordecard= document.querySelector(".scordecard");

function conform()
{
  contaner.style.display="none";
  scordecard.style.display="block"
  teamaname.innerHTML=batfirst;
  teambname.innerHTML=batsecond;
}
let maxover = 3;
let maxwicket=5;
let remball = 6*maxover;
const teamascored = document.getElementById("teamascored");
const teamawicket = document.getElementById("teamawicket");
const teamaover = document.getElementById("teamaover");
const teamaball = document.getElementById("teamaball");
const teamaname = document.getElementById("teamaname");
const teambname = document.getElementById("teambname");

let teamArun=0;
let teamAwicket =0;
let teamAball=0;
let teamAover=0;
let inning = 1;

const teambscored = document.getElementById("teambscored");
const teambwicket = document.getElementById("teambwicket");
const teambover = document.getElementById("teambover");
const teambball = document.getElementById("teambball");
let teamBrun=0;
let teamBwicket =0;
let teamBball=0;
let teamBover=0;
function run(runs){
  if((teamAover==(maxover-1)&&teamAball==6)||teamAwicket==maxwicket)
  {
    inning++;
    teamAball=0;
    teamAover++;
    teamaover.innerHTML=teamAover;
    teamaball.innerHTML=teamAball;
    massage.innerHTML="change";
  }
  if(inning==1){
    if(runs<7)
      {
      teamArun=teamArun+runs;
      teamascored.innerHTML=teamArun;
      teamAball++;
      if(teamAball==7)
      {
        teamAball=1;
        teamAover++;
      }
      if(runs==0)
      currentscored.innerHTML=`<h1>Dot Ball</h1>`;
      if(runs==1)
      currentscored.innerHTML=`<h1>Single</h1>`;
      if(runs==2)
      currentscored.innerHTML=`<h1>Dubble</h1>`;
      if(runs==3)
      currentscored.innerHTML=`<h1>Three run<h1>`;
      if(runs==4)
      currentscored.innerHTML=`<h1>Four</h1>`;
      if(runs==6)
      currentscored.innerHTML=`<h1>Six !</h1>`;
      teamaover.innerHTML=teamAover;
      teamaball.innerHTML=teamAball;
      }
      else if(runs==7)
      {
      teamArun++;
      teamascored.innerHTML=teamArun;
      }
      else if(runs==8)
      {
        teamAwicket++;
        teamAball++;
        if(teamAball==7)
        {
          teamAball=1;
          teamAover++;
        }

        teamaover.innerHTML=teamAover;
        teamaball.innerHTML=teamAball;
        teamawicket.innerHTML=teamAwicket;
       
      }
      
  }
  else if(inning==2){
 
      if(runs<7)
      {
      remball--;
      teamBrun=teamBrun+runs;
      teambscored.innerHTML=teamBrun;
      teamBball++;
      if(teamBball==7)
      {
        teamBball=1;
        teamBover++;
      }
      teambover.innerHTML=teamBover;
      teambball.innerHTML=teamBball;
      if(runs==0)
        currentscored.innerHTML=`<h1>Dot Ball</h1>`;
        if(runs==1)
        currentscored.innerHTML=`<h1>Single</h1>`;
        if(runs==2)
        currentscored.innerHTML=`<h1>Dubble</h1>`;
        if(runs==3)
        currentscored.innerHTML=`<h1>Three run<h1>`;
        if(runs==4)
        currentscored.innerHTML=`<h1>Four</h1>`;
        if(runs==6)
        currentscored.innerHTML=`<h1>Six !</h1>`;
      }
      else if(runs==7)
      {
      teamBrun++;
      teambscored.innerHTML=teamBrun;
      }
      else if(runs==8)
      {
        teamBwicket++;
        teamBball++;
        if(teamBball==7)
        {
          teamBball=1;
          teamBover++;
        }
        teambover.innerHTML=teamBover;
        teambball.innerHTML=teamBball;
        teambwicket.innerHTML=teamBwicket;
      }
      massage.innerHTML=`${batsecond} need ${teamArun - teamBrun} to win in${remball} ball`;
      if(teamArun<teamBrun||teamBover==maxover||teamBwicket==maxwicket)
      {
        if(teamArun<teamBrun)
        {
          massage.innerText=`${batsecond} Won by ${maxwicket-teamBwicket} Wicket`;
          inning=3;
        }
        if(teamBover==maxover)
        {
          massage.innerHTML=`${batfirst} won by ${teamArun-teamBrun} run  `;
          inning=3;
        }
      }
  }
}

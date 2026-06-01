const villainImage =
document.getElementById("villainImage");

const villainName =
document.getElementById("villainName");

const villainInfo =
document.getElementById("villainInfo");

function showVillain(villain){

villainImage.style.display = "block";

if(villain==="goblin"){

villainImage.src="image/goblin.jpeg";

villainName.innerHTML="GREEN GOBLIN";

villainInfo.innerHTML=`
<b>Status:</b> AT LARGE 🚨<br><br>

<b>Threat Level:</b> ★★★★★<br><br>

<b>Known Abilities:</b><br>
• Enhanced Strength<br>
• Goblin Glider<br>
• Pumpkin Bombs<br>
• Tactical Intelligence<br><br>

<b>Last Seen:</b><br>
Midtown Manhattan<br><br>

<b>Identity:</b><br>
CLASSIFIED
`;
}

else if(villain==="ock"){

villainImage.src="ock.jpeg";

villainName.innerHTML="DOCTOR OCTOPUS";

villainInfo.innerHTML=`
<b>Status:</b> AT LARGE 🚨<br><br>

<b>Threat Level:</b> ★★★★★<br><br>

<b>Known Abilities:</b><br>
• Mechanical Arms<br>
• Scientific Genius<br>
• Advanced Combat Skills<br><br>

<b>Last Seen:</b><br>
Brooklyn Harbor<br><br>

<b>Identity:</b><br>
UNKNOWN
`;
}

else if(villain==="electro"){

villainImage.src="electro.jpeg";

villainName.innerHTML="ELECTRO";

villainInfo.innerHTML=`
<b>Status:</b> ACTIVE ⚡<br><br>

<b>Threat Level:</b> ★★★★☆<br><br>

<b>Known Abilities:</b><br>
• Electricity Manipulation<br>
• Energy Projection<br>
• Grid Control<br><br>

<b>Last Seen:</b><br>
Times Square<br><br>

<b>Identity:</b><br>
UNKNOWN
`;
}

else if(villain==="lizard"){

villainImage.src="lizard.jpg";

villainName.innerHTML="LIZARD";

villainInfo.innerHTML=`
<b>Status:</b> ACTIVE 🦎<br><br>

<b>Threat Level:</b> ★★★★★<br><br>

<b>Known Abilities:</b><br>
• Regeneration<br>
• Enhanced Strength<br>
• Wall Climbing<br><br>

<b>Last Seen:</b><br>
New York Sewers<br><br>

<b>Identity:</b><br>
UNKNOWN
`;
}

}

const heroImage =
document.getElementById("heroImage");

const heroName =
document.getElementById("heroName");

const heroInfo =
document.getElementById("heroInfo");

function showHero(hero){

heroImage.style.display = "block";

if(hero==="daredevil"){

heroImage.src="daredevil.heic";

heroName.innerHTML="DAREDEVIL";

heroInfo.innerHTML=`
<b>Status:</b> ACTIVE 🛡️<br><br>

<b>Area:</b> Hell's Kitchen<br><br>

<b>Abilities:</b><br>
• Radar Sense<br>
• Enhanced Hearing<br>
• Master Martial Artist<br><br>

<b>Role:</b><br>
Primary ally during organized crime investigations.
`;
}

else if(hero==="punisher"){

heroImage.src="punisher.webp";

heroName.innerHTML="PUNISHER";

heroInfo.innerHTML=`
<b>Status:</b> ACTIVE 💀<br><br>

<b>Area:</b> New York City<br><br>

<b>Abilities:</b><br>
• Military Training<br>
• Expert Marksman<br>
• Tactical Planning<br><br>

<b>Role:</b><br>
Independent operative. Assists against major criminal threats.
`;
}

else if(hero==="jessica"){

heroImage.src="Jessica.jpg";

heroName.innerHTML="JESSICA JONES";

heroInfo.innerHTML=`
<b>Status:</b> ACTIVE 🕵️<br><br>

<b>Abilities:</b><br>
• Enhanced Strength<br>
• Investigation Skills<br>
• Tracking & Surveillance<br><br>

<b>Role:</b><br>
Intelligence gathering and investigations.
`;
}

else if(hero==="luke"){

heroImage.src="luke.jpg";

heroName.innerHTML="LUKE CAGE";

heroInfo.innerHTML=`
<b>Status:</b> ACTIVE 💪<br><br>

<b>Abilities:</b><br>
• Super Strength<br>
• Bulletproof Skin<br>
• Enhanced Durability<br><br>

<b>Role:</b><br>
Protects Harlem and supports emergency response.
`;
}

else if(hero==="ironfist"){

heroImage.src="ironfist.png";

heroName.innerHTML="IRON FIST";

heroInfo.innerHTML=`
<b>Status:</b> ACTIVE 🥋<br><br>

<b>Abilities:</b><br>
• Chi Manipulation<br>
• Iron Fist Strike<br>
• Martial Arts Mastery<br><br>

<b>Role:</b><br>
High-risk combat specialist.
`;
}

else if(hero==="blackcat"){

heroImage.src="blackcat.jpg";

heroName.innerHTML="BLACK CAT";

heroInfo.innerHTML=`
<b>Status:</b> CONDITIONAL ALLY 🐈<br><br>

<b>Abilities:</b><br>
• Acrobatics<br>
• Stealth<br>
• Expert Thief<br><br>

<b>Role:</b><br>
Assists when interests align.
`;
}

else if(hero==="miles"){

heroImage.src="milesmorales.jpg";

heroName.innerHTML="MILES MORALES";

heroInfo.innerHTML=`
<b>Status:</b> ACTIVE 🕸️<br><br>

<b>Area:</b> Brooklyn<br><br>

<b>Abilities:</b><br>
• Camouflage<br>
• Venom Blast<br>
• Spider Sense<br><br>

<b>Role:</b><br>
Primary Spider-Man ally.
`;
}

}

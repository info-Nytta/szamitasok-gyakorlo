function kerulet(a,b,c) {
	let e="";
	a=Number(a);
	b=Number(b);
	c=Number(c);
	if (a+b>c && a+c>b && b+c>a)
		e="A háromszög kerülete: "+(a+b+c);
	else
		e="Ezekkel az értékkel nem rajzolható fel háromszög.";
	document.getElementById('kerulet').innerHTML=e;
}

function sorozat(a1,d,n) {
	let e="";
	a1=Number(a1); 
	d=Number(d); 
	n=Number(n);
	if (n>0) {
		e="Generált sorozat: ";
		for (i=0; i<n; i++) 
			e+=(a1+i*d)+" ";
	}
	document.getElementById('generalt').innerHTML=e;
}

function szorzotabla(szam) {
	let tabl="<table>";
	for (i=1; i<=szam; i++) {
		tabl+="<tr>";
		for (j=1; j<=szam; j++) {
			tabl+= "<td title='"+i+"*"+j+"' onClick='window.alert(i)'>"+(i*j)+"</td>";
		}
		tabl+="</tr>";
	}	
	tabl+="</table>";
	document.getElementById('szorzotabla').innerHTML = tabl;
}

function atvalt(c) {
	ho=parseFloat(c);
	K=ho+273.15;
	F=ho*(9/5)+32;
	document.getElementById('k').value=K;
	document.getElementById('f').value=F;
}

function forint(ft) {
	document.getElementById('millo').innerHTML = ft+" millió Ft";
}

function torlesztes(osszeg,futam) {
	let reszlet=(osszeg*1000000*1.0125 + osszeg*1000000 * 0.125)/ futam;
	document.getElementById('reszlet').innerHTML = "Havi törlesztőrészlet "+osszeg+" millió Ft felvett összeg esetén "+futam+" hónapos futamidővel: <strong>"+reszlet.toFixed(0)+"</strong> Ft.";
}

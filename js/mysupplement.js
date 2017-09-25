
function shoppingcat1(){
    var id1 = document.getElementById("content1");
	var key1 = document.getElementById("key1").innerText;
	if(key1==="关闭"){id1.style.height="40px";		document.getElementById("key1").innerText="展开";}
	else{id1.style.height="130px";		document.getElementById("key1").innerText="关闭";}
}
function shoppingcat2(){
	var id2 = document.getElementById("content2");
	var key2 = document.getElementById("key2").innerText;
	if(key2==="关闭"){id2.style.height="40px";		document.getElementById("key2").innerText="展开";}
	else{id2.style.height="180px";		document.getElementById("key2").innerText="关闭";}
}
function shoppingcat3(){
	var id3 = document.getElementById("content3");
	var key3 = document.getElementById("key3").innerText;
	if(key3==="关闭"){id3.style.height="40px";		document.getElementById("key3").innerText="展开";}
	else{id3.style.height="150px";		document.getElementById("key3").innerText="关闭";}
}
function shoppingcat4(){
	var id4 = document.getElementById("content4");
	var key4 = document.getElementById("key4").innerText;
	if(key4==="关闭"){id4.style.height="40px";		document.getElementById("key4").innerText="展开";}
	else{id4.style.height="180px";		document.getElementById("key4").innerText="关闭";}
}
function shoppingcat5(){
	var id5 = document.getElementById("content5");
	var key5 = document.getElementById("key5").innerText;
	if(key5==="关闭"){id5.style.height="40px";		document.getElementById("key5").innerText="展开";}
	else{id5.style.height="180px";		document.getElementById("key5").innerText="关闭";}
}


function showHideTextc1()
{ 	
	document.getElementById("div_wrong1").className="div_hide";
  	document.getElementById("div_correct1").className="div_show";
  	document.getElementById("ans1").className="div_show";
}
function showHideTextc2(){
	document.getElementById("div_wrong2").className="div_hide";
  	document.getElementById("div_correct2").className="div_show";
  	document.getElementById("ans2").className="div_show";
}
function showHideTextc3(){
	document.getElementById("div_wrong3").className="div_hide";
  	document.getElementById("div_correct3").className="div_show";
  	document.getElementById("ans3").className="div_show";
}
function showHideTextc4(){
	document.getElementById("div_wrong4").className="div_hide";
  	document.getElementById("div_correct4").className="div_show";
  	document.getElementById("ans4").className="div_show";
 }
function showHideTextc5(){
	document.getElementById("div_wrong5").className="div_hide";
  	document.getElementById("div_correct5").className="div_show";
  	document.getElementById("ans5").className="div_show";
}

function showHideTextw1()
{
	document.getElementById("div_correct1").className="div_hide";
  	document.getElementById("div_wrong1").className="div_show";
  	document.getElementById("ans1").className="div_show";
 }
function showHideTextw2(){
	document.getElementById("div_correct2").className="div_hide";
  	document.getElementById("div_wrong2").className="div_show";
  	document.getElementById("ans2").className="div_show";
}
function showHideTextw3(){
	document.getElementById("div_correct3").className="div_hide";
  	document.getElementById("div_wrong3").className="div_show";
  	document.getElementById("ans3").className="div_show";
}
function showHideTextw4(){
	document.getElementById("div_correct4").className="div_hide";
  	document.getElementById("div_wrong4").className="div_show";
  	document.getElementById("ans4").className="div_show";
}
function showHideTextw5(){
	document.getElementById("div_correct5").className="div_hide";
  	document.getElementById("div_wrong5").className="div_show";
  	document.getElementById("ans5").className="div_show";
}
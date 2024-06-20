/**
 * 
 */

 var deal =  document.querySelector("#deal");
 var deal2 =  document.querySelector("#deal2");
 var deal3 =  document.querySelector("#deal3");
 var deal4 =  document.querySelector("#deal4");
 
 var player1 = document.querySelector("#player1");
 var player2 = document.querySelector("#player2");
 var player3 = document.querySelector("#player3");
 var player4 = document.querySelector("#player4");
 var player5 = document.querySelector("#player5");
 var player6 = document.querySelector("#player6");
 
 var hyouzi1 = document.querySelector("#hyouzi1");
 var hyouzi2 = document.querySelector("#hyouzi2");
 var syouhai = document.querySelector("#syouhai");
 
 var but01 = document.querySelector("#button01");
 var but02 = document.querySelector("#button02");
 
 const cards = ["heart","club","diamond","spade"];
 let tehudas = new Array();
 //引いたカードの重複を管理
 let players = [player2,player3, player4, player5,player6];
 
//一枚目
let soots01 = Math.floor(Math.random() * (4 - 0)+ 0);
//　0~3の値 
let car01 = Math.floor(Math.random() * (14 - 1)+ 1);
//1~13の値
let ca01 = ( '00' + car01 ).slice( -2 );
//桁数　1→01に変換
let temoti01 = "img/card_" + cards[soots01] + "_" + ca01 + ".png"
//画像に変換
tehudas.push(temoti01);
//配列に格納


//二枚目

let soots02 = Math.floor(Math.random() * (4 - 0)+ 0);
let car02 = Math.floor(Math.random() * (14 - 1)+ 1);
let ca02 = ( '00' + car02 ).slice( -2 );
let temoti02 = "img/card_" + cards[soots02] + "_" + ca02 + ".png"

//重複の確認
if(temoti01 == temoti02){
	for(let i = 0; temoti01 == temoti02; i++){
soots02 = Math.floor(Math.random() * (4 - 0)+ 0);
car02 = Math.floor(Math.random() * (14 - 1)+ 1);
ca02 = ( '00' + car02 ).slice( -2 );
temoti02 = "img/card_" + cards[soots02] + "_" + ca02 + ".png"
 //tehudas.push(temoti02);
 if(!(temoti01 == temoti02)){
	 tehudas.push(temoti02);
				break;}		
}
}else {tehudas.push(temoti02);}


//ディーラーの値
let dealsoots01 = Math.floor(Math.random() * (4 - 0)+ 0);
let dealcar01 = Math.floor(Math.random() * (14 - 1)+ 1);
let dealca01 = ( '00' + dealcar01 ).slice( -2 );
let dealtemoti01 = "img/card_" + cards[dealsoots01] + "_" + dealca01 + ".png"

//重複の確認
for (const tehuda of tehudas){
if(tehuda == dealtemoti01){
for(let i = 0; tehuda == dealtemoti01; i++){
dealsoots01 = Math.floor(Math.random() * (4 - 0)+ 0);
dealcar01 = Math.floor(Math.random() * (14 - 1)+ 1);
dealca01 = ( '00' + dealcar01 ).slice( -2 );
dealtemoti01 = "img/card_" + cards[dealsoots01] + "_" + dealca01 + ".png"
// tehudas.push(dealtemoti01);			}
}
}		
}

tehudas.push(dealtemoti01)


let dealsoots02 = Math.floor(Math.random() * (4 - 0)+ 0);
let dealcar02 = Math.floor(Math.random() * (14 - 1)+ 1);
let dealca02 = ( '00' + dealcar02 ).slice( -2 );
let dealtemoti02 = "img/card_" + cards[dealsoots02] + "_" + dealca02 + ".png"

for (const tehuda of tehudas){
if(tehuda == dealtemoti02){
for(let i = 0; tehuda == dealtemoti02; i++){
dealsoots02 = Math.floor(Math.random() * (4 - 0)+ 0);
dealcar02 = Math.floor(Math.random() * (14 - 1)+ 1);
dealca02 = ( '00' + dealcar02 ).slice( -2 );
dealtemoti02 = "img/card_" + cards[dealsoots02] + "_" + dealca02 + ".png"
// tehudas.push(dealtemoti02);	
}
}
}
tehudas.push(dealtemoti02);


deal.innerHTML = "<img class='image01' src='" + dealtemoti01 +  "' alt='card" + temoti01 + "'>"
 + "<img class='image01' src='img/card_back.png' alt='伏せられたカード'>"
//deal.innerHTML = "<img class='image01' src='" + dealtemoti01 +  "' alt='card" + temoti01 + "'>"
//+ "<img class='image01' src='" + dealtemoti02 +  "' alt='card" + temoti02 + "'>";

player1.innerHTML = "<img class='image01' src='" + temoti01 +  "' alt='card" + temoti01 + "'>"
+ "<img class='image01' src='" + temoti02 +  "' alt='card" + temoti02 + "'>";


//絵札の数値を10に直して手持ちの数字・ディーラーの数字を表示

if(car01 > 10){car01 = 10;}
if(car02 > 10){car02 = 10;}
if(dealcar01 > 10){dealcar01 = 10;}
if(dealcar02 > 10){dealcar02 = 10;}

var firstplayer = car01 + car02;
var firstdeal = dealcar01 + dealcar02;

hyouzi1.innerHTML = "あなたの数値は " + firstplayer;


//ブラックジャックの判定

if ((dealcar01 == 1 || dealcar01 == 10) && (dealcar02 == 1 || dealcar02 == 10) && !((dealcar01 == dealcar02))) {

			if((car01 == 1 || car01 == 10) && (car02 == 1 || car02 == 10) && !(car01 == car02)) {
				deal.innerHTML = "<img class='image01' src='" + dealtemoti01 +  "' alt='card" + temoti01 + "'>"
							+ "<img class='image01' src='" + dealtemoti02 +  "' alt='card" + temoti02 + "'>";
			hyouzi2.innerHTML = "両者ブラックジャック"
			syouhai.textContent = "引き分けです";
	disableButton01();
	disableButton02();
				}else{
					deal.innerHTML = "<img class='image01' src='" + dealtemoti01 +  "' alt='card" + temoti01 + "'>"
							+ "<img class='image01' src='" + dealtemoti02 +  "' alt='card" + temoti02 + "'>";
			hyouzi2.innerHTML = "ディーラーのブラックジャック"
			syouhai.textContent = "あなたの敗北です";
	disableButton01();
	disableButton02();
					
				}}else if ((car01 == 1 || car01 == 10) && (car02 == 1 || car02 == 10) && !(car01 == car02)) {

			deal.innerHTML = "<img class='image01' src='" + dealtemoti01 +  "' alt='card" + temoti01 + "'>"
							+ "<img class='image01' src='" + dealtemoti02 +  "' alt='card" + temoti02 + "'>";
			hyouzi2.innerHTML = "プレイヤーのブラックジャック";
			syouhai.textContent = "あなたの勝利です";
			disableButton01();
	disableButton02();
				}


let soots03;
let car03;
let ca03;
let temoti03;
const tehudakazu = new Array();
//数字のみのボタンで引いた手札を管理
const buttontemoti = new Array();
//画像付き（スート付）のボタンで引いた手札を管理
var buttoncount = 0;
//ボタン押し回数管理




function button01(){
	
	//カードを引く関数
	buttoncount++;
	soots03 = Math.floor(Math.random() * (4 - 0)+ 0);
	car03 = Math.floor(Math.random() * (14 - 1)+ 1)
	ca03 = ( '00' + car03 ).slice( -2 );;
	temoti03 = "img/card_" + cards[soots03] + "_" + ca03 + ".png"
	
	for (const tehuda of tehudas){
		if(tehuda == temoti03){
			for(let i = 0; tehuda == temoti03; i++){
				soots03 = Math.floor(Math.random() * (4 - 0)+ 0);
				car03 = Math.floor(Math.random() * (14 - 1)+ 1)
				ca03 = ( '00' + car03 ).slice( -2 );;
				temoti03 = "img/card_" + cards[soots03] + "_" + ca03 + ".png";			
				
//				if(!(tehuda == temoti03)){tehudas.push(temoti03);
//				tehudakazu.push(car03);
//				buttontemoti.push(temoti03);
//				break;}				
						}
			}
				
				var len = tehudas.length - 1;
				if(len == tehuda){
					tehudas.push(temoti03);
				tehudakazu.push(car03);
				buttontemoti.push(temoti03);
				}
		}

	var buttontemotikazu = buttoncount - 1;
			
	players[buttontemotikazu].innerHTML = "<img class='image01' src='" + temoti03 +  "' alt='card" + temoti03 + "'>"
					
	//今まで引いたカードを合計する
	if(car03 > 10){car03 = 10;}
	
	firstplayer += car03;
	hyouzi1.innerHTML = "あなたの数値は" + firstplayer;

	if(firstplayer > 21){
		
		hyouzi2.innerHTML = "バースト";
		syouhai.textContent = "あなたの敗北です";
		disableButton01();
		disableButton02();
		}
		
}


let dealsoots03;
let dealcar03;
let dealca03;
let dealtemoti03;
let dealhikisu = 0;
const dealtehudakazu = new Array();
//数字のみのボタンで引いた手札を管理
const dealbuttontemoti = new Array();
//画像付き（スート付）のボタンで引いた手札を管理
let dealer = [deal,deal2,deal3,deal4];


function button02(){
		//buttonのグレーアウト
	disableButton01();
	disableButton02();
	//ディーラーの手札公開	
	deal.innerHTML = "<img class='image01' src='" + dealtemoti01 +  "' alt='card" + temoti01 + "'>"
	+ "<img class='image01' src='" + dealtemoti02 +  "' alt='card" + temoti02 + "'>";

if(firstdeal < 17){
	for(let i = 0; firstdeal < 17 ; i++){
		dealhikisu++;	
		dealsoots03 = Math.floor(Math.random() * (4 - 0)+ 0);
		dealcar03 = Math.floor(Math.random() * (14 - 1)+ 1)
		dealca03 = ( '00' + dealcar03 ).slice( -2 );;
		dealtemoti03 = "img/card_" + cards[dealsoots03] + "_" + dealca03 + ".png"
		
		for (const tehuda of tehudas){
			if(tehuda == dealtemoti03){
				for(let i = 0; tehuda == dealtemoti03; i++){
					dealsoots03 = Math.floor(Math.random() * (4 - 0)+ 0);
					dealcar03 = Math.floor(Math.random() * (14 - 1)+ 1);
					dealca03 = ( '00' + dealcar03 ).slice( -2 );
					dealtemoti03 = "img/card_" + cards[dealsoots03] + "_" + dealca03 + ".png";		

					var moimoi = tehudas.length - 1;
					if(moimoi == tehuda){
						dealtehudas.push(dealtemoti03);
						dealtehudakazu.push(dealcar03);
						dealbuttontemoti.push(dealtemoti03);
					}
				}
		
			}	
		}

	dealer[dealhikisu].innerHTML = "<img class='image01' src='" + dealtemoti03 +  "' alt='card" + dealtemoti03 + "'>"
					
	//今まで引いたカードを合計する
	if(dealcar03 > 10){dealcar03 = 10;}
	
	firstdeal += dealcar03;
	
	hyouzi1.innerHTML = "あなたの数値は" + firstplayer + "ディーラーは" + firstdeal;

	if(firstdeal > 21){
			
		hyouzi2.innerHTML = "ディーラーのバースト";
		syouhai.textContent = "あなたの勝利です";
		disableButton01();
		disableButton02();
		break;
		}	
		
		
		
		if(firstdeal >= 17){
		win();}
	}

		
}else{win();}
	

}	
	


function win(){
	
	let dii = firstdeal;
	let praa = firstplayer;
	if(dii > 21){
		hyouzi2.textContent = "ディーラーバースト"
		syouhai.textContent = "あなたの勝ち"
		disableButton01();
		 disableButton02();
		
	}
	
	else if((21 - dii) > (21 - praa)){
		syouhai.textContent = "あなたの勝ち"
		disableButton01();
		 disableButton02();
	}else{
		syouhai.textContent = "あなたの負け"
		disableButton01();
		 disableButton02();
	}
		
}


   function disableButton01() {
	  but01.innerHTML ="<button id='button03' disabled='false'>手札を引く </button>";
    }
  function disableButton02() {
	 	  but02.innerHTML = "<button id='button04' disabled='false'>手札を引かない </button>";

    }

	

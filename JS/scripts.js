 //  投票開分頁
function openvote() {
  window.open("https://open.spotify.com/track/5mxK8CuKCqxW7HlBjBtmRS?si=04d737c4b3614ade");}

// //  測驗開分頁
// function opengo() {
// 	window.open("file:///C:/Users/lovet/OneDrive/%E6%A1%8C%E9%9D%A2/02_%E9%AD%8F%E5%A6%8F%E8%87%BB_%E5%9C%98%E9%AB%94%E4%BB%8B%E7%B4%B9%E7%B6%B2%E7%AB%99-%E4%BB%A5VIVIZ%E7%82%BA%E4%BE%8B/q10.html");}
  
//音樂播放 
function musicb(){
                  var audio = document.getElementById('music1');
                  if(audio!==null){
                      if(audio.paused){
                          audio.play();
                      }else{
                          audio.pause();
                      }
                  }
              }
  

function musicr(){
                  var audio = document.getElementById('music2');
                  if(audio!==null){
                      if(audio.paused){
                          audio.play();
                      }else{
                          audio.pause();
                      }
                  }
              }

			  
 // 計算q10分數
function coreCount()
{
	var cores=0;
	var qestions=document.getElementsByClassName("question")
	for(var i=0;i<qestions.length;i++)
	{
		var count=0;
		var flag=1;
		var answer=document.getElementsByName("answer"+(i+1));
		for(var a=0;a<answer.length;a++)
		{
			if(answer[a].checked)
			{
				if(answer[a].value*1<0)
				{
					flag=0;
					break;
				}
				else
					count+=answer[a].value*1;
			}
		}
		if(flag==1)
			cores+=count;
	}	
	

if(cores == 100 ){
		alert(" 你的分數是" + cores + "分" + "\r 你是一個100分的NA.V");	
	}
	else if  (cores < 60){
		alert(" 你的分數是" + cores + "分" + "\r 這樣不行喔");
		  }
	else{ alert(" 你的分數是" + cores + "分" + "\r 真是個很棒的NA.V");}
}


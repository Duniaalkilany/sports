


alert('hello football lovers')

var nameofplayer= prompt('Hello, please enter the name of your favourite football player');

while(nameofplayer !== 'ronaldo'&& nameofplayer !=='messi'){nameofplayer = prompt('please enter the name of your favourite player , ronaldo or messi');}





var userchoose;

if(nameofplayer === 'ronaldo'){document.write('ronaldo is the best player in the world');userchoose='<img src="https://sport-goal.com/wp-content/uploads/2019/11/%D8%B1%D9%88%D9%86%D8%A7%D9%84%D8%AF%D9%88-%D9%85%D8%AF%D8%B1%D9%8A%D8%AF-%D8%B0%D8%A8%D9%8A%D8%A9.jpeg">';} else if (nameofplayer ==='messi'){document.write('messi isnt the best player ronaldo is the best player in the world');userchoose='<img src="https://img.btolat.com/news/large/1c85b65b-c252-493f-95e4-ace59adc3cfd.jpg">';}


var imagesnumber= prompt('how many images of your favourite football player do you want ?');

for(var i=0 ; i < imagesnumber ; i++){document.write(userchoose);}
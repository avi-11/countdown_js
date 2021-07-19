let go= document.querySelector('.go');
let reset= document.querySelector('.reset');



go.addEventListener('click', (e) => {
    const day1 = document.querySelector('#day1').value;
    const month1= document.querySelector('#month1').value;
    const year1= document.querySelector('#year1').value;

    const day2 = document.querySelector('#day2').value;
    const month2= document.querySelector('#month2').value;
    const year2= document.querySelector('#year2').value;

    let date1=`${day1} ${month1} ${year1}`;
    let date2=`${day2} ${month2} ${year2}`;

    let start= new Date(date1);
    let end= new Date(date2);

    let time=end - start;
    setInterval((e) => {
        if(time>0){
            time--;
            const days=Math.floor(time/86400000);
            const hours=Math.floor(time/3600)%24;
            const minutes=Math.floor(time/60)%60;
            const seconds=Math.floor(time)%60;

            document.querySelector('#days').innerHTML=days;
            document.querySelector('#Hours').innerHTML=hours;
            document.querySelector('#Minutes').innerHTML=minutes;
            document.querySelector('#Seconds').innerHTML=seconds;
        }
        else{
            document.querySelector('#days').innerHTML=0;
            document.querySelector('#Hours').innerHTML=0;
            document.querySelector('#Minutes').innerHTML=0;
            document.querySelector('#Seconds').innerHTML=0;
        }
    },1000);
    reset.addEventListener('click',(e) => {

        clearInterval(e);
        document.querySelector('#days').innerHTML=0;
        document.querySelector('#Hours').innerHTML=0;
        document.querySelector('#Minutes').innerHTML=0;
        document.querySelector('#Seconds').innerHTML=0;

        document.querySelector('#day1').value='';
        document.querySelector('#month1').value='';
        document.querySelector('#year1').value='';

        document.querySelector('#day2').value='';
        document.querySelector('#month2').value='';
        document.querySelector('#year2').value='';
    });
   
});
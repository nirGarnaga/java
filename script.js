
// let x = 10;

// let y = 5;

// let resulet = x / y                       

// alert(resulet);
// alert(num1 + '+' + num2 + '=' + result );   פחות נוח 

// function calc (){
// let num1 = prompt('Enter first number'); 

// let num2 = prompt('Enter second number');

// let result = Number(num1) + Number(num2); 

// // alert(`${num1} + ${num2} = ${result}`);
// document.getElementById('hw').innerHTML=`${num1} + ${num2} = ${result}`;
// }

// function O_O(){
// let number1 = document.getElementById('_num1').value;
// let number2 = document.getElementById('_num2').value;
// let result = Number(number1) + Number(number2); 
// document.getElementById('hw').innerHTML=`${number1} + ${number2} = ${result}`;

// }

function o_o() {

    let number1 = document.getElementById('_num1').value;

    let number2 = document.getElementById('_num2').value;

    let result = Number(number1) + Number(number2);

    document.getElementById('hw').innerHTML=`${number1} + ${number2} = ${result}`;

}


function _calculate(x,y){

    let result = Number(x) + Number(y);
    document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`;  

}

// function check(){
//     let number1 = Number(document.getElementById('num1').value);
//     let number2 = Number(document.getElementById('num2').value);
//     if(number1 > number2){
// document.getElementById('special').innerHTML = `${number2}; Is Greater Than ${number2}`; 
// }
// }

function check() {
    let numberOne = Number(document.getElementById('num1').value);
    let numberTwo = Number(document.getElementById('num2').value);

    if( numberOne > numberTwo  ) {
      document.getElementById('_special').innerHTML = `${numberOne} Is Greater Than ${numberTwo} 🔼`;
    }
    else if(number1 == nuumber2){
        document.getElementById('_special').innerHTML = `${numberOne} Is Less Than ${numberTwo} `;
    }
    else{
        document.getElementById('_special').innerHTML = `${numberOne} Is Equal Than ${numberTwo} `;
    }
}
let x = 10;

let y = 5;

let array = ['text','nir',x,y];


console.log(array);
console.log(array[1]);  

console.log(array.length);

if(array.length > 3){
    console.log('array has more than 3 items.')
    
}

console.log(array[array.length - 1])



let array1 = ['1','2','3','4','5','6','7','8'];
console.log(array1)
console.log(array1[3])
console.log(array1.length)
console.log(array1[array1.length - 1])



let _movies = [
    {
        title:'The Dark Knight',
        rating: 9.5,
        year: 2008,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
        linkUrl: 'https://www.imdb.com/title/tt0468569/',
        rateUrl: 'https://www.imdb.com/title/tt0468569/ratings' },
    {
        title:'The Dark Knight Rises',
        rating: 8.4,
        year: 2012,
        imageUrl: 'https://images.moviesanywhere.com/137de7df53b44414af057f89c0647b0b/38dd4c91-6758-46bd-969b-6acf010a249b.jpg',
        linkUrl: 'https://www.imdb.com/title/tt1345836/',
        rateUrl: 'https://www.imdb.com/title/tt1345836/ratings'    },
    {
        title:'Superman Man of Steel',
        rating: 7.1,
        year: 2013,
        imageUrl: 'https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
        linkUrl: 'https://www.imdb.com/title/tt0770828/',
        rateUrl:'https://www.imdb.com/title/tt0770828/ratings'},
        {
          title:'Tony Hawk: Until the Wheels Fall Off',
          rating:8.0,
          year:2022,
          imageUrl:'data:image/jpeg;base64,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',
          linkUrl:'https://www.imdb.com/title/tt16118722/?ref_=nv_sr_srsg_0',
          rateUrl:'https://www.imdb.com/title/tt16118722/ratings/?ref_=tt_ov_rt',
        },
        {
          title:'grown up 2',
          rating:5.3,
          year:2013,
          imageUrl:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f4d59b48a1c106958485d311a31af0c1aa81808b5903ccb79fab5af5050ed6cf._RI_V_TTW_.jpg',
          linkUrl:'https://www.imdb.com/title/tt2191701/?ref_=nv_sr_srsg_3',
          rateUrl:'https://www.imdb.com/title/tt2191701/ratings/?ref_=tt_ov_rt',
        },
        {
          title:'You Dont Mess With the Zohan',
          rating:5.6,
          year:2008,
          imageUrl:'https://m.media-amazon.com/images/M/MV5BMzE2MzEzNDc5M15BMl5BanBnXkFtZTcwMzYxOTA3MQ@@._V1_FMjpg_UX1000_.jpg',
          linkUrl:'https://www.imdb.com/title/tt0960144/?ref_=nv_sr_srsg_0',
          rateUrl:'https://www.imdb.com/title/tt0960144/ratings/?ref_=tt_ov_rt',          
        }


];

function displayImages()
{
    for (let index = 0; index < _movies.length; index++) 
    {
        
      document.getElementById('movies').innerHTML += `
      <div class="col">
          <div class="card shadow-sm">
          <img class="card-img" src="${_movies[index].imageUrl}" alt="">
            <div class="card-body">
              <p class="card-text">${_movies[index].title}</p>
              <p class="card-text">${_movies[index].rating}</p>
              <p class="card-text">${_movies[index].year}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a class="btn btn-sm btn-outline-secondary" href="${_movies[index].linkUrl}" target="_blank">View movies</a>
                  <a class="btn btn-sm btn-outline-secondary" href="${_movies[index].rateUrl}"target="_blank">View rating</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }}
    window.onload = function() {
      displayImages();
    };
for (let index = 0; index < 501; index++) 
{
  console.log(index)
}

function sendEmail() {

  let firstName = document.querySelector('[name="FirstName"]').value;
  let lastName = document.querySelector('[name="lastName"]').value;
  let email = document.querySelector('[name="email"]').value;
  let message = document.querySelector('[name="messageContent"]').value;
  let date = new Date();
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "nir.garnaga@gmail.com",
      Password: "81A5B276C62C34990BD56975DC093BD123FD",
      From: "nir.garnaga@gmail.com",
      To: "nir.garnaga@gmail.com",
      Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
      Body: `
           <b>הודעה מאת:</b> ${firstName} ${lastName}
            <br>
            <br>
            <b>כתובת איימיל של השולח:</b> ${email}
            <br>
            <br>
            <b>נשלח בתאריך:</b> ${date}
            <br>
            <br>
            <b>תוכן ההודעה:</b>
            <br>
          ${message}
          `
  });


}




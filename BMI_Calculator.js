let bmi;
const form=document.querySelector('form')
//const height= parseInt(document.querySelector('#height').value)
//this usecase will give you empty
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height= parseInt(document.querySelector('#height').value);
  const weight= parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');
 
 
 

if (height==='' || height<0 || isNaN(height)){
     results.innerHTML=`please give a valid height ${height}`;
  }
 else if(weight==='' || weight<0 || isNaN(weight)){
       results.innerHTML=`please give a valid height ${weight}`;
 }
 else{
     bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.6){
      results.innerHTML=`Under Weight ${bmi}`
    }
    else if(18.6<=bmi && bmi<=24.9){
    results.innerHTML=`normal range ${bmi}`
    }
    else{
      results.innerHTML=`overweight ${bmi}`
    }
 }
 
});
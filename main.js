

//регистрационная страница и войти (проверка пороля)
function ChekPassword(){ 
  document.getElementById('registr').addEventListener('submit', function(event) {
    event.preventDefault();
});
  var parol1 = document.getElementById('pass1'); 
  var parol1_text1 = document.getElementById('pass-1'); 
  var parol2 = document.getElementById('pass2'); 
  var parol2_text2 = document.getElementById('pass-2');  
  var knopO4ka = document.getElementById('button'); 
  if(parol1.value.length<7){ 
      parol1_text1.textContent='Минимум 7 символов!'; 
      knopO4ka.setAttribute('disabled', ''); 
  } 
  else{ 
      let chisl = 0; 
      let znak = 0; 
      for (i=0; i<parol1.value.length; i++){ 
          if(parol1.value[i]/1==parol1.value[i]){ 
              chisl++; 
          } 
          if(parol1.value[i]=="!" || parol1.value[i]=="*" || parol1.value[i]=="$"){ 
              znak++; 
          }  
      } 
      if(chisl>0 && znak>0){   
          parol1_text1.textContent = ''; 
          if(parol1.value == parol2.value){ 
              parol2_text2.textContent=''; 
              knopO4ka.removeAttribute('disabled', ''); 
          } 
          else{ 
              parol2_text2.textContent='Пароли не совпадают!'; 
              knopO4ka.setAttribute('disabled', ''); 
          }      
           
      } 
      else if(chisl>0 && znak == 0){ 
          parol1_text1.textContent='пароль должен содержать символы "!",  "$", "*"'; 
          knopO4ka.setAttribute('disabled', ''); 
      } 
      else if(chisl==0 && znak >0){    
          parol1_text1.textContent='пароль должен содержать минимум одну цифру'; 
          knopO4ka.setAttribute('disabled', '');             
      } 
      else{ 
          parol1_text1.textContent='пароль должен содержать минимум одну цифру и символы "!",  "$", "*"'; 
          knopO4ka.setAttribute('disabled', ''); 
      } 
  }   
  
  if(parol3.value.length<7){ 
    parol3_text3.textContent='Минимум 7 символов!'; 
    knopO4ka.setAttribute('disabled', ''); 
  } 
  else{ 
    let chisl = 0; 
    let znak = 0; 
    for (i=0; i<parol3.value.length; i++){ 
        if(parol3.value[i]/1==parol3.value[i]){ 
            chisl++; 
        } 
        if(parol3.value[i]=="!" || parol3.value[i]=="*" || parol3.value[i]=="$"){ 
            znak++; 
        }  
    } 
    if(chisl>0 && znak>0){   
        parol3_text3.textContent = '';         
    } 
    else if(chisl>0 && znak == 0){ 
        parol3_text3.textContent='пароль должен содержать символы "!",  "$", "*"'; 
        knopO4ka.setAttribute('disabled', ''); 
    } 
    else if(chisl==0 && znak >0){    
        parol3_text3.textContent='пароль должен содержать минимум одну цифру'; 
        knopO4ka.setAttribute('disabled', '');             
    } 
    else{ 
        parol3_text3.textContent='пароль должен содержать минимум одну цифру и символы "!",  "$", "*"'; 
        knopO4ka.setAttribute('disabled', ''); 
    } 
  }   
}

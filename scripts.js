
const list = document.querySelector("ul")
const h1 = document.querySelector("h1")

const input = document.querySelector('input')
input.addEventListener('change', setDate, false )

const select = document.querySelector("select");
select.addEventListener( 'change', setDate, false)

function setDate(){
    const setYear = input.value;
    console.log(setYear)

    const d = new Date();
    console.log (d.getMonth())
    
    const mon= select.value
    let days= 31
    if (mon==='February') {
      days = 28
      
    } else if(mon ==='April'|| mon=='June' || mon==='August' || mon==='September' || mon==='November'){  
      days = 30
    }
    createCalendar(days, mon, year)
}

function createCalendar(days, mon, year){
  list.innerHTML = '';
  h1.textContent= mon;
  for (i=1; i <= days; i++){
    const listItem= document.createElement('li')
    listItem.textContent= i;
    list.appendChild(listItem)

  }
    
  }

createCalendar(31,'January', 2013)
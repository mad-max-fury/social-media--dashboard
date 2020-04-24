let toggleOn = document.getElementById('fa-toggle-on');
let toggleOff = document.getElementById('fa-toggle-off');
let header = document.getElementById('First');
let tail = document.getElementById('innerfirst');
let all = document.getElementsByClassName('asocial');
let gray = document.getElementsByClassName('gray-text');


toggleOff.style.display = 'none';

for( each = 0; each < all.length; each++){
    all[each].addEventListener('mouseover', function(event){
        console.log('Akuko');
        event.target.style.backgroundColor = "#f7f7f7";
    
        setTimeout(function() {
            event.target.style.backgroundColor = "#f0f3fa";
          }, 500);
        
    }, false);
}


toggleOn.addEventListener('click', function(){
    // console.log('clicked');
    document.body.style.backgroundColor = '#1D2029';
    header.style.backgroundColor = '#20222F'
    toggleOn.style.display = 'none'
    toggleOff.style.display = 'flex'
    toggleOff.style.flexDirection = 'column'
    tail.style.color = 'white'

    for( each = 0; each < all.length; each++){
        all[each].style.backgroundColor = '#252B43';
        all[each].style.color = 'white';


        all[each].addEventListener('mouseover', function(event){
            console.log('Akuko');
            event.target.style.backgroundColor = "#434447";
    
            setTimeout(function() {
                event.target.style.backgroundColor = "#252B43";
              }, 500);
            
        }, false)
        
    }
   
})

toggleOff.addEventListener('click', function(){
        // console.log('clicked');
        document.body.style.backgroundColor = '#ffffff'
        header.style.backgroundColor = '#f8f9fe'
        toggleOff.style.display = 'none'
        toggleOn.style.display = 'flex'
        tail.style.color = 'black'
        for( each = 0; each < all.length; each++){
            all[each].style.backgroundColor = '#f5f5f5'
            all[each].style.color = 'black';

        }
})


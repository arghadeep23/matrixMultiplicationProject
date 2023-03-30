const form=document.querySelector('#entryForm');
const body=document.querySelector('body');
const btn=document.querySelector('#btn');
const r1=form.elements.r1.value;
const r2=form.elements.r2.value;
const c1=form.elements.c1.value;
const c2=form.elements.c2.value;
function e(){
    
    if(c1!=r2)
    {
        const h4=document.createElement('h4');
        h4.append('Invalid Entry, c1 and r2 must be equal');
        body.appendChild(h4);
        btn.disabled=true; 
    }
    else{
        //passvalues();
        form.submit();
    }
}
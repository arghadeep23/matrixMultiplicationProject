window.onload=function(){
        const myKeysValues=window.location.search; 
        const urlParams=new URLSearchParams(myKeysValues);
        const r1=urlParams.get('r1');
        const c1=urlParams.get('c1');
        const r2=urlParams.get('r2');
        const c2=urlParams.get('c2');
        const table1 = document.querySelector('#table1');
            const table2 = document.querySelector('#table2');
            for (let i = 0; i < r1; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < c1; j++) {
                    const col = document.createElement('td');
                    const input = document.createElement('input');
                    input.setAttribute('type', 'number');
                    input.setAttribute('id', `t1r${i}c${j}`);
                    col.appendChild(input);
                    row.appendChild(col);
                }
                table1.appendChild(row);
            }
            for (let i = 0; i < r2; i++) {
                const row = document.createElement('tr');
                for (let j = 0; j < c2; j++) {
                    const col = document.createElement('td');
                    const input = document.createElement('input');
                    input.setAttribute('type', 'number');
                    input.setAttribute('id', `t2r${i}c${j}`);
                    col.appendChild(input);
                    row.appendChild(col);
                }
                table2.appendChild(row);
            }}
const btn1=document.querySelector('#btn1');
btn1.addEventListener('click',
function(e){
    const myKeysValues=window.location.search; 
        const urlParams=new URLSearchParams(myKeysValues);
        const r1=Number(urlParams.get('r1'));
        const c1=Number(urlParams.get('c1'));
        const r2=Number(urlParams.get('r2'));
        const c2=Number(urlParams.get('c2'));
    var mat1=new Array(r1);
    for(let i=0;i<mat1.length;i++)
        mat1[i]=new Array(c1);
    var mat2=new Array(r2);
    for(let i=0;i<mat2.length;i++)
        mat2[i]=new Array(c2);
    for(i=0;i<r1;i++)
    {
        for(j=0;j<c1;j++)
            mat1[i][j]=parseInt(document.querySelector(`#t1r${i}c${j}`).value);
    }
        for(i=0;i<r2;i++)
        {
            for(j=0;j<c2;j++)
            mat2[i][j]=parseInt(document.querySelector(`#t2r${i}c${j}`).value);
        }
        var mat3=new Array(r1);
        for(let i=0;i<mat3.length;i++)
        mat3[i]=new Array(c2);
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c2;j++)
            {
                mat3[i][j]=0;
                for(k=0;k<c1;k++)
                    mat3[i][j]+=mat1[i][k]*mat2[k][j];
            }
        }
        const table3=document.createElement('table');
        for (let i = 0; i < r1; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < c2; j++) {
                const col = document.createElement('td');
                    // const input = document.createElement('input');
                col.append(mat3[i][j]);
                row.appendChild(col);
                }
                table3.appendChild(row);
            }
            document.body.appendChild(table3);
});
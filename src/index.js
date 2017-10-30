/*import './css/style.css'*/

/**
 * 洗牌算法
 */
const a=Array.from({length:9},(s,x)=>x);
//console.log(a);
for (let i=0;i<a.length-2;i++){
    let random=Math.random()*(a.length-i);
    let j=i+Math.floor(random);
    [a[i],a[j]]=[a[j],a[i]]
}
//console.log(a);
/**
 * 冒泡算法
 * 比较两个数排序
 * 
 */
const array=Array.from({length:9},(s,x)=>{
    return Math.floor(Math.random()*100)
});
console.log(array);
function bubleSort(data){
    var t=0;
    for(let i=0;i<=data.length-1;i++){
        for(let k=i-1;k>=0;k--){
        if(data[k]>data[k+1]){
            [data[k],data[k+1]]=[data[k+1],data[k]]
        }
        }    
    }
    return data;
}

//console.log(bubleSort(array));

/**
 * 选择排序
 */

function selectionSort(data){
    for(let i=0;i<data.length;i++){
        var min=data[i];
        var temp;
        var index=i;
        for(let j=i+1;j<data.length;j++){
            
        }
    }
}


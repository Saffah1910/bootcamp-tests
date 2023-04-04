// var itemList = [
//     {name : 'apples', qty : 10},
//     {name : 'pears', qty : 37},
//     {name : 'bananas', qty : 27},
//     {name : 'apples', qty : 3},
// ];

function findItemsOver20(list){
    const items = [];
    if(list !== ""){
      
    for (var i=0;i<list.length;i++){
      
      const quantity = list[i]
      if (quantity.qty > 20){
           items.push(quantity);
      } 
    }
      return items;
}
else{
    return "no data entered"
}
    }
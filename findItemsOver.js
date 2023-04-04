function findItemsOver(list, threshold){
	const items = [];
  for (var i=0;i<list.length;i++){
    const quantity = list[i]
    if (quantity.qty > threshold){
      items.push (quantity);}
  }return items;
}
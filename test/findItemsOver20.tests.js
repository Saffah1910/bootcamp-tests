describe('products that have a quantity higher than 20', function () {
    it('return the product names the quantity of the item is higher than 20 ', function () {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver20(itemList));

    
    });






    // it('if the product quantity is more than 20 return the name of the item', function () {
    //     assert.deepEqual(([]), findItemsOver20(37));
    // });
    



    // it('If the item quanity is an empty string return no data entered', function () {
    //     assert.deepEqual(([]), findItemsOver20(" "), 'no data entered');
    // });


});
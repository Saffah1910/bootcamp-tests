describe('Is it a week day?' , function(){
    it('return true if it is a week day ' , function(){
        assert.equal(true, isWeekday("Monday"));
    });

    it('return false if it is not a week day?' , function(){
        assert.equal(false, isWeekday("Saturday"));
    });

    it('return false if an empty string was entered ' , function(){
        assert.deepEqual(false, isWeekday(""));
    });


   

});

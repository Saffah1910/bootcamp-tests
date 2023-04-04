describe('returns the right price based on the shift', function () {
    it('return fees for transport R20 the shift is in the morning', function () {


        assert.equal(transportFee('morning'), 'R20');
    });
    it('return fees for transport R10 if it is an afternoon shift', function () {

        assert.equal(transportFee('afternoon'), 'R10');
        
    });

    it('Return no registration number entered if empty string was passed', function () {
        assert.equal(("no registration number entered"), countAllFromTown(""));
        


});
});
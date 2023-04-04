describe('returns the right price based on the shift', function () {
    it('return R20 if it is a morning shift', function () {


        assert.equal(transportFee('morning'), 'R20');
    });
    it('return  R10 if it is an afternoon shift', function () {

        assert.equal(transportFee('afternoon'), 'R10');
        
    });

    it('Return no registration number entered if empty string was passed', function () {
        assert.equal(("no registration number entered"), countAllFromTown(""));assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });


});
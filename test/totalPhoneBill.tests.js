describe('returns the total phone bll based on how many calls and sms', function () {
    it('return R7.45 for 2 call and 3 sms', function () {


        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('return R3.40 for 1 call and 1 sms', function () {

        assert.equal('R3.40', totalPhoneBill('call, sms'));
        
    });

    it('return R1.30 for 1 call and 1 sms', function () {
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });


});
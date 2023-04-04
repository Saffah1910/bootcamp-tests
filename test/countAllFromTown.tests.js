describe('registration numbers in the string that is for that town', function () {
    it('return the amount of registartion numbers from stellenbosch', function () {


        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3)
    });
    it('return  if the registration number is from kuilsriver', function () {

        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1)
        
    });

    it('Return no registration number entered if empty string was passed', function () {
        assert.equal(("no registration number entered"), countAllFromTown(""));
    });


});
var chai = require('chai');
var assert = require('assert');

var expect = chai.expect;

describe('Utilities.capitalizeFirstLetter ', function(){

  var utilities = require('../utilities');

  it('should capitalize the first letter in the string - test 1', function(){    

    var capitalizedName = utilities.capitalizeFirstLetter('james');

    expect(capitalizedName).to.equal('James');
  });

  it('should capitalize the first letter in the string - test 2', function(){    

    var capitalizedName = utilities.capitalizeFirstLetter('jerry');

    expect(capitalizedName).to.equal('Jerry');
  });

  it('should capitalize the first letter in the string - test 3', function(){    

    var capitalizedName = utilities.capitalizeFirstLetter('Tom Sawer');

    expect(capitalizedName).to.equal('Tom Sawer');
  });

  it('should capitalize the first letter in the string - test 3', function(){    

    var capitalizedName = utilities.capitalizeFirstLetter(' r K Adarsh');

    expect(capitalizedName).to.equal('R K Adarsh');
  });
});
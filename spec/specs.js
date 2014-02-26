 describe('Purchase', function() {
   describe('initialize', function() {
    it('should create a new purchase with a description and amount', function() {
      var testPurchase = Object.create(Purchase);
      testPurchase.initialize("Pizza", 10);
      testPurchase.dsc.should.equal('Pizza');
      testPurchase.amount.should.equal(10);
    });
   });
   describe('create', function(){
    it('initializes the purchase', function() {
      var testPurchase = Purchase.create('Pizza', 10);
      testPurchase.dsc.should.equal('Pizza');
    });
   });
  describe('categorize', function(){
    it('categorizes the purchase', function(){
      var testPurchase = Purchase.create('Pizza', 10);
      var testCategory = Category.create('Food');
      testPurchase.categorize(testCategory).should.eql(testCategory.purchases);
      testCategory.purchases[0].should.equal(testPurchase)
    });
   });
  });

describe('Category', function(){
  describe('initialize', function(){
    it('should create a new category!', function() {
      var testCategory = Object.create(Category);
      testCategory.initialize('Food');
      testCategory.name.should.equal('Food');
    });
  });
 describe('create', function(){
    it('initializes the category', function() {
      var testCategory = Category.create('Food');
      testCategory.name.should.equal('Food');
    });
    it('sets up an empty array called purchases', function() {
      var testCategory = Category.create(Category);
      testCategory.purchases.should.eql([]);
    });
  });
});

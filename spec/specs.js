 beforeEach(function() {
  Category.all = [];
});
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
  describe('totalSpent', function() {
    it('totals the amount spent in a category', function() {
      var testPurchase = Purchase.create('Pizza', 10);
      var testCategory = Category.create('Food');
      var testPurchase2 = Purchase.create('cheeseburger', 15);
      testPurchase.categorize(testCategory);
      testPurchase2.categorize(testCategory);
      testCategory.totalSpent().should.equal(25);
    });
  });
  describe('totalSpentEverywhere', function() {
    it('totals the amount spent on all purchases', function() {
      var testPurchase1 = Purchase.create('Salad', 9);
      var testPurchase2 = Purchase.create('Salad', 5);
      var testPurchase3 = Purchase.create('Salad', 7);
      var testPurchase4 = Purchase.create('Salad', 6);
      
      var testCategory1 = Category.create('expensiveSalad');
      var testCategory2 = Category.create('Salad');

      testPurchase1.categorize(testCategory1);
      testPurchase2.categorize(testCategory1);
      testPurchase3.categorize(testCategory2);
      testPurchase4.categorize(testCategory2);

      Category.totalSpentEverywhere().should.equal(27);

    });
  });
});

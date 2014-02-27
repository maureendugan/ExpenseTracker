var Purchase = {
  create: function(description, amount){
    var purchase = Object.create(Purchase);
    purchase.initialize(description, amount);
    return purchase;
  },
  initialize: function(description, amount){
    this.dsc = description;
    this.amount = amount;
  },
  categorize: function(category) {
    category.purchases.push(this);
    return category.purchases;
  }
};

var Category = {
  all: [],
  create: function(name) {
    var category = Object.create(Category);
    category.purchases = [];
    category.initialize(name);
    this.all.push(category);
    return category;
  },
  initialize: function(name) {
    this.name = name;
  },
  totalSpent: function() {
    var result = 0;
    this.purchases.forEach(function(purchase) {
      result += parseFloat(purchase.amount);
    }); 
    return result;
  },
  totalSpentEverywhere: function() {
   var result = 0;
   this.all.forEach(function(category) {
      result += category.totalSpent();
    }); 
   return result;
  }
}

$(document).ready(function(){
  
  var currentCategory;
  $('form#new-purchase').submit(function(event) {
   event.preventDefault();
   var newPurchase = Purchase.create( $('#new-description').val(), $('#new-amount').val() )
    $('table#purchases').append('<tr><td class="description">' + newPurchase.dsc 
                                + '</td><td class="amount">' + newPurchase.amount + '</td></tr>');    
    
    newPurchase.categorize(currentCategory);
    this.reset();
  });

  $('form#newCategory').submit(function(event) {
    event.preventDefault();
    var newCategory = Category.create($('#newCat').val());
    this.reset();
  });

 $('form').submit(function() {
   $('table#categoriesTable').html('<tr><td>Categories</td><td>Total Spent</td><td>Percentage</td></tr>');
    console.log(Category.all)
    Category.all.forEach(function(category) {
      $('table#categoriesTable').append('<tr class='+category.name+'><td class="clickable">' + category.name 
                                      + '</td><td>' + category.totalSpent() 
                                      + '</td><td>' + (category.totalSpent() / Category.totalSpentEverywhere()*100).toPrecision(2) + "%</td><tr>")
        $('tr.'+category.name).on('click',function(){
        currentCategory = category;
        $('#categoryToAddTo').text(category.name);
        $('#purchaseTable').text(category.name);
        $('table#purchases').html('<tr><td>Description</td><td>Amount</td></tr>');
        currentCategory.purchases.forEach(function(purchase){
        $('table#purchases').append('<tr><td class="description">' + purchase.dsc 
                          + '</td><td class="amount">' + purchase.amount + '</td></tr>')
      });
      })
    });
  });
});

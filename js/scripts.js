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
  create: function(name) {
    var category = Object.create(Category);
    category.purchases = [];
    category.initialize(name);
    return category;
  },
  initialize: function(name) {
    this.name = name;
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
    console.log(currentCategory.purchases[0].dsc+ " " + currentCategory.name + ""+ currentCategory.purchases )


    this.reset();
  });
  $('form#newCategory').submit(function(event) {
    event.preventDefault();
    var newCategory = Category.create($('#newCat').val());
    $('ul#categories').append('<li>' + newCategory.name + '</li>');
      $('ul#categories li').last().click(function(){
        $('#categoryToAddTo').html( $(this).text() )
          currentCategory = newCategory;
          $('#purchaseTable').html($(this).text());
             $('table#purchases').html('<tr><td>Description</td><td>Amount</td></tr>');
            currentCategory.purchases.forEach(function(purchase){
              $('table#purchases').append('<tr><td class="description">' + purchase.dsc 
                                + '</td><td class="amount">' + purchase.amount + '</td></tr>')
            });
      });
    this.reset();
  });
});

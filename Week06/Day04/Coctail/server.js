'use strict';
var express = require('express');
var app = express();
var PORT = 3000;

app.set('view engine','ejs');

const cocktails = [
  { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
  { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
  { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
  { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
  { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
  { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
  { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
  { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];
const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.get('/', function (req, res) {
  res.render('front',{list:cocktails,list1:alcoholList});
});

app.get('/?alcohol={alcholType}', function (req, res) {
  let currentCocktails = []
  let query = reg.alcoholType;
  query.alcohol !== undefined ? (
    alcoholList.indexOf(query.alcohol.toUpperCase()) !== -1 ? (
      cocktails.forEach(element => element.contains.includes(query.alcohol) ?
        currentCocktails.push(element) :
        undefined)) : currentCocktails = cocktails)
    : (currentCocktails = cocktails);
  res.render('from', { currentCocktails, alcoholList });
});

 app.listen(PORT, function () {
  console.log('The server works on localhost:3000!');
});
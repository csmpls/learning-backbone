'use strict'

var app = {}

app.functions = {

  findURLs: function(text) {
    // TODO: should match urls of the form www.regex.com and regex.com
    return text.match(
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
   )
  }

  , isItemInList:  function(item, list) {
    return $.inArray(item, list) == -1 ? true : false
  }

  , findNewItems: function(items, seen_items) {
    var context = this
    return _.filter(items, function(i){ return context.isItemInList(i, seen_items) })
  }

}

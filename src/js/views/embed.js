'use strict'

app.EmbedView = Backbone.View.extend({

  tagName: 'div'
  , template: _.template($('#embed-template').html())

  , render: function() {
    this.$el.html( 
      this.template( 
        this.model.attributes
    ))
    return this
  }

})

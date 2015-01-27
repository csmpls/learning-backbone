'use strict'

app.EmbedFormView = app.EmbedView.extend({

  template: _.template(
      $('#embed-template')
      .prepend('<button class="destroy">x</button>')
      .html()
  )

  , initialize: function() {
     this.model.on('destroy', this.remove, this)
  }

  , events: function() {
    return _.extend({},app.EmbedView.prototype.events,{
      'click .destroy' : 'destroy'
    })
  }

  , destroy: function () {
    this.model.destroy()
  }
})



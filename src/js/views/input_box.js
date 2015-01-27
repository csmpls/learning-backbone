'use strict'

app.InputBoxView = Backbone.View.extend({

  el: '#inputBox'

  , initialize: function() {
    this.input = this.$('#input')
    this.embedContainer = $('.embedContainer')
    this.alreadyEmbeddedURLs = []
    this.addEmbedForm('')

    // check for new URLs every 1 second
    this.checkNewURLsInterval = window.setInterval(
      function() {
        if (!this.hasEmbedForm()) this.embedFirstNewURL()
      }.bind(this)
    , 1000)

  }

  , embedFirstNewURL: function() {
    var new_urls = app.functions.findNewItems(this.getTypedURLs(), this.alreadyEmbeddedURLs)
    if (new_urls.length>0) this.addEmbedForm(new_urls[0])
  }

  // TODO: get request + hide/display a spinner
  // TODO: slide down/fade in embed form
  , addEmbedForm: function(url) {
    var embedFormView = new app.EmbedFormView(
     { model: new app.Embed(getRandomEmbedResponse()) } 
    )
    this.embedContainer.append(embedFormView.render().el)
    // add url to list of urls we've already embedded
    this.alreadyEmbeddedURLs.push(url)
  }

  // truthy if there's an embed form in the div
  , hasEmbedForm: function() {
    return this.embedContainer.html().length > 0
  }

  , getTypedURLs: function() {
    return app.functions.findURLs(this.getInputText())
  }
 
  , getInputText: function() {
    return this.$('#input').val()
  }
 
})

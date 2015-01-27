'use strict'

// -- models
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


// app.Post = Backbone.Model.extend({
//  defaults: {
//    text: ''
//    , embed:null
//  }
// })

app.Embed = Backbone.Model.extend({

  defaults: { 
    type: 'link'
    , url: null
    , title: null
    , thumbnail_url: null
    , description: null
    , author_name: null
    , author_url: null
    , provider_name: null
    , html: null
  }

  , initialize: function () {
    // initializes from json obj, using defaults where no key provided
  }

})
// -- collections
// app.PostList = Backbone.Collection.extend({
//  model: app.Post
//  , localStorage: new Store('post')
// })

// app.postList = new app.PostList()

// --- views

// individual post view

// app.PostView = Backbone.View.extend({
//  tagName: 'div'
//  , template: _template($('#post=template').html())
//  render: function() {
//    this.$el.html( this.template(this.model.toJSON()) )
//    this.embed = new Embed()
//    this.$el.$('.embedContainer').append(this.embed.render().el)
//    return this
//  }
// })


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

app.EmbedFormView = app.EmbedView.extend({

  template: _.template(
      // TODO: better way to do this?
      $('#embed-template').prepend('<button class="destroy">x</button>').html()
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


app.InputBoxView = Backbone.View.extend({

  el: '#inputBox'

  , initialize: function() {
    this.input = this.$('#input')
    this.embedContainer = $('.embedContainer')
    this.alreadyEmbeddedURLs = []
    this.addEmbedForm('')

    // set an interval to check for new URLs
    this.checkNewURLsInterval = window.setInterval(
      function() {
        if (!this.hasEmbedForm()) this.embedFirstNewURL()
      }.bind(this)
    , 1000)

  }

  , events: {
    // 'keypress #input': 'handleKeypress'
  }

  // , handleKeypress: function() {
  //   if (!this.hasEmbedForm()) this.embedFirstNewURL()
  // }

  , embedFirstNewURL: function() {
    var new_urls = app.functions.findNewItems(
      this.getTypedURLs(), 
      this.alreadyEmbeddedURLs)
    if (new_urls.length>0) this.addEmbedForm(new_urls[0])
  }

  // TODO: get request + hide/display a spinner
  // TODO: slide down/fade in embed form
  , addEmbedForm: function(url) {
    // make an embed form + add it
    var embedFormView = new app.EmbedFormView(
     { model: new app.Embed(getRandomEmbedResponse()) } )
    this.embedContainer.append(
      embedFormView.render().el)
    // add url to list of urls we've already embedded
    this.alreadyEmbeddedURLs.push(url)
  }

  // truthy if there's an embed form in the div
  , hasEmbedForm: function() {
    return this.embedContainer.html().length > 0
  }

  , getTypedURLs: function() {
    return app.functions.findURLs( this.getInputText() )
  }
 
  , getInputText: function() {
    return this.$('#input').val()
  }
 
})

app.inputBoxView = new app.InputBoxView()




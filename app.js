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
    var newURLs = _.filter(items, function(i){ return context.isItemInList(i, seen_items) })
    return newURLs.length > 0 ? newURLs : null
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
  // TODO: this is stupid and bad
    '<button class="destroy">x</button>' + $('#embed-template').html()
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
    this.embeddedURLs = []
    this.embedURLSearchTimeout = null
    this.addEmbed('') // TODO: DEBUG - get a rando embed right away
  }

  , events: {
    'keypress #input': 'handleKeypress'
  }

  , addEmbed: function(url) {
    // make an embed form + add it
    var embedFormView = new app.EmbedFormView(
     { model: new app.Embed(getRandomEmbedResponse()) } )
    this.embedContainer.append(
      embedFormView.render().el )
    // add url to list of urls we've already embedded
    this.embeddedURLs.push(url)
  }

  , embedFirstNewURL: function() {
    var new_urls = 
    app.functions.findNewItems( 
      app.functions.findURLs( this.getInputText() ), 
      this.embeddedURLs)
    if (new_urls) this.addEmbed(new_urls[0])
  }

  , handleKeypress: function() {
    if (!this.hasEmbedForm()) this.embedFirstNewURL()
  }

  // truthy if there's an embed form in the div
  , hasEmbedForm: function() {
    return this.embedContainer.html().length > 0
  }
 
  , getInputText: function() {
    return this.$('#input').val()
  }
 
})

app.inputBoxView = new app.InputBoxView()




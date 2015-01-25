'use strict'

// -- models
var app = {}


// app.Post = Backbone.Model.extend({
//  defaults: {
//    text: ''
//    , embed:null
//  }
// })

app.Embed = Backbone.Model.extend({
  defaults: {
    url: ''
    , title: ''
    , description: ''
    , author: ''
    , provider: ''
    , embedHTML: ''
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

  , initialize: function() {
    this.$el.html( this.template( this.model ))
    return this
  }

})


app.InputBoxView = Backbone.View.extend({
  el: '#inputBox'

  , initialize: function() {
    this.input = this.$('#input')
    this.hasEmbed = false
  }

  , events: {
    'keypress #input': 'lookForURL'
  }

  , lookForURL: function() {
    if (!this.hasEmbed) {
      var urls = this.findURLs(
        this.$('#input').val()
      )
      if (urls) {
        this.hasEmbed = true
        this.getEmbed(urls[0])
      }
    }
  } 

  , getEmbed: function(url) {
    var embed = {
      url: url 
      , title: 'niiice'
      , description: ''
      , author: ''
      , provider: ''
      , embedHTML: ''
    }
    var embedView = new app.EmbedView({model: embed})
    this.$('.embedContainer').append(embedView.render().el)
  }

  , findURLs: function(text) {
    // TODO: should match urls of the form www.regex.com and regex.com
    return text.match(
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
    )
  }
})

app.inputBoxView = new app.InputBoxView()




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

  defaults: { type: 'link'
    , url: null
    , title: null
    , thumbnail_url: null
    , description: null
    , author_name: null
    , author_url: null
    , provider_name: null
    , html: null
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
  }

  , render: function() {
    this.$el.html( this.template( 
      _.extend({}, new app.Embed().defaults, this.model) // set join of defaults + returned json - this prevents absent keys from breaking the template
    ))
    return this
  }

  , events: {
    'click .destroy' : 'destroy'
  }


})


app.InputBoxView = Backbone.View.extend({
  el: '#inputBox'

  , initialize: function() {
    this.input = this.$('#input')
    this.hasEmbed = false
    // DEBUG
    this.getEmbed('')
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
    var embedView = new app.EmbedView({model: getRandomEmbedResponse()})
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




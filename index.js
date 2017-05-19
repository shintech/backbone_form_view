const FormView = Backbone.Marionette.View.extend({
  tagName: 'form',

  ui: {
    submit: '.submit-button'
  },

  events: {
    'click @ui.submit': 'handleSubmit'
  },

  initialize: function (options) {
    this.template = options.formTemplate
    this.model = options.model
    Backbone.Validation.bind(this, {
      model: this.model
    })
  },

  handleSubmit: function (e) {
    e.preventDefault()

    const modelAttrs = {
      name: $('#name_input').val(),
      attribute: $('#attribute_input').val()
    }

    this.model.set(modelAttrs)

    if (this.model.isValid(true)) {
      this.model.save(modelAttrs, {
        success: function () {
          submitMessage('Successfully created...')
        },
        error: function () {
          submitMessage('Submission error...')
          $('.message-block').addClass('has-error')
        }
      })

      Backbone.Validation.unbind(this)
    }
  }
})

function submitMessage (message) {
  const messageBlock = $('.message-block')
  messageBlock.html(message).removeClass('hidden has-error')
}

export default FormView

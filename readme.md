### Synopsis

Creates a form using Backbone.js

### Usage 

    formRoute: function () {
      const formView = new FormView({ 
        formTemplate: require('./templates/form-view-template.html'),
        model: new Model(),
      })
      
      this.app.view.showChildView('main', formView)
    }
    
### Sample Template

    <div class="form-group">
      <label for="name" class="control-label">Name</label>
      <input class="form-control" type="text" id="name_input" name="name" placeholder="Enter name...">
      <span class="help-block hidden"></span>
    </div>
    
    <div class="form-group">
      <label for="attribute" class="control-label">Attribute</label>
      <input class="form-control" type="number" id="attribute_input" name="attribute" placeholder="Enter attribute...">
      <span class="help-block hidden"></span>
    </div>
    
    <button class="btn btn-default btn-block submit-button">Submit</button>
    <span class="message-block hidden"></span>    
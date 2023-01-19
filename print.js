sap.ui.define(
     ['sap/ui/core/Control', 'sap/m/Input', 'sap/m/Button', "sap/m/ComboBox",],
     function (Control, Input, Button) {
          return Control.extend("com.mobo.printreusablee.print", {
               metadata: {
                    properties: {

                    },
                    aggregations: {
                         _input: { type: "sap.m.Input", multiple: false, visibility: "hidden" },
                         _inputt: { type: "sap.m.Input", multiple: false, visibility: "hidden" },
                         _button: { type: "sap.m.Button", multiple: false, visibility: "hidden" },
                         _button1: { type: "sap.m.Button", multiple: false, visibility: "hidden" },    
                    },
                    Methods: {}
               },
               init: function () {
                    this.setAggregation("_input", new Input({
                         value: "",
                         placeholder: "Input",
                         width: "auto",
                         showValueHelp: true,
                         valueHelpRequest: false
                    }).addStyleClass("sapUiSmallMargin"));
                    this.setAggregation("_button1", new Button({
                         text: "Input",
                         tooltip: "Print",
                         press: this._onSubmit.bind(this)
                    }).addStyleClass("sapUiSmallMargin"));
                    this.setAggregation("_inputt", new Input({
                         value: "",
                         placeholder: "Input1",
                         width: "auto",
                    }).addStyleClass("sapUiSmallMargin"));
                    this.setAggregation("_button", new Button({
                         icon: "sap-icon://print",
                         tooltip: "Print",
                         press: this.onOpenDialog.bind(this)
                    }).addStyleClass("sapUiSmallMargin"));
                   
               },
               renderer: function (oRm, oControl) {
                    oRm.renderControl(oControl.getAggregation("_input"));
                    oRm.renderControl(oControl.getAggregation("_inputt"));
                    oRm.renderControl(oControl.getAggregation("_button"));  
                    oRm.renderControl(oControl.getAggregation("_button1")); 
               },
               _onSubmit: function () {
                    this.agg = this.getAggregation("_input").getValue();
                    this.getAggregation("_inputt").setValue(this.agg);
               },
               _onInput: function () {

               },
               onOpenDialog: function () {
                    // create dialog lazily
                    if (!this.printDialog) {
                         this.printDialog = sap.ui.xmlfragment("printDialog",
                              "com.mobo.printreusablee.print.fragments.printDialog", this);
                    }
                    this.printDialog.open();
               },
               onCloseDialog: function () {
                    this.printDialog.close();
               },
               onAfterRendering: function () {
                    //if I need to do any post render actions, it will happen here
                    if (sap.ui.core.Control.prototype.onAfterRendering) {
                         sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments); //run the super class's method first
                    }
               },
          });
     }
);
/*
 * BestInPlace 3.0.0.alpha (2014)
 *
 * Depends:
 *	best_in_place.js
 *	jquery.ui.datepicker.js
 */
/*global BestInPlaceEditor */
BestInPlaceEditor.forms.date={activateForm:function(){"use strict";var e=this,t=jQuery(document.createElement("form")).addClass("form_in_place").attr("action","javascript:void(0);").attr("style","display:inline"),n=jQuery(document.createElement("input")).attr("type","text").attr("name",this.attributeName).attr("value",this.sanitizeValue(this.display_value));this.inner_class!==null&&n.addClass(this.inner_class),t.append(n),this.element.html(t),this.setHtmlAttributes(),this.element.find("input")[0].select(),this.element.find("form").bind("submit",{editor:this},BestInPlaceEditor.forms.input.submitHandler),this.element.find("input").bind("keyup",{editor:this},BestInPlaceEditor.forms.input.keyupHandler),this.element.find("input").datepicker({onClose:function(){e.update()}}).datepicker("show")},getValue:function(){"use strict";return this.sanitizeValue(this.element.find("input").val())},submitHandler:function(e){"use strict";e.data.editor.update()},keyupHandler:function(e){"use strict";e.keyCode===27&&e.data.editor.abort()}};
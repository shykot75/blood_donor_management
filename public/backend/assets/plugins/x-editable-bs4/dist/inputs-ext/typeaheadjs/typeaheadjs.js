(function($){"use strict";var Constructor=function(options){this.init('typeaheadjs',options,Constructor.defaults);};$.fn.editableutils.inherit(Constructor,$.fn.editabletypes.text);$.extend(Constructor.prototype,{render:function(){this.renderClear();this.setClass();this.setAttr('placeholder');this.isAutosubmit=false;var that=this;this.$input.on('keydown',function(e){if(!that.isAutosubmit){return;}
var $dropdown=that.$input.closest('.editable-input').find('.tt-dropdown-menu');if(!$dropdown.is(':visible')&&e.which===13){that.$input.closest('form').submit();}});this.$input.typeahead(this.options.typeahead);if($.fn.editableform.engine==='bs3'){if(this.$input.hasClass('input-sm')){this.$input.siblings('input.tt-hint').addClass('input-sm');}
if(this.$input.hasClass('input-lg')){this.$input.siblings('input.tt-hint').addClass('input-lg');}}},autosubmit:function(){this.isAutosubmit=true;}});Constructor.defaults=$.extend({},$.fn.editabletypes.list.defaults,{tpl:'<input type="text">',typeahead:null,clear:true});$.fn.editabletypes.typeaheadjs=Constructor;}(window.jQuery));
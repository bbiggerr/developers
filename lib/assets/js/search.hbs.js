(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    ";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = helpers.title || (depth0 && depth0.title)),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)));
  },"5":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression, buffer = "\n    <strong class=\"small\">by "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.person)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.datepublished), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n  ";
},"6":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n      &middot; published "
    + escapeExpression((helper = helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing,helper.call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.datepublished), {"name":"formatDate","hash":{},"data":data})))
    + "</strong>\n    ";
},"8":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "\n      "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.metatags)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1['og:description'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      ";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "\n        "
    + escapeExpression(((helper = helpers.snippet || (depth0 && depth0.snippet)),(typeof helper === functionType ? helper.call(depth0, {"name":"snippet","hash":{},"data":data}) : helper)))
    + "\n    ";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", escapeExpression=this.escapeExpression, buffer = "<div class=\"library-search-result\">\n  <h6><a href=\""
    + escapeExpression(((helper = helpers.link || (depth0 && depth0.link)),(typeof helper === functionType ? helper.call(depth0, {"name":"link","hash":{},"data":data}) : helper)))
    + "\">";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.article)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1.name), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></h6>\n\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.person), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <p class=\"small\">\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.pagemap)),stack1 == null || stack1 === false ? stack1 : stack1.metatags)),stack1 == null || stack1 === false ? stack1 : stack1['0'])),stack1 == null || stack1 === false ? stack1 : stack1['og:description']), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.program(10, data),"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n  </p>\n</div>\n";
},"useData":true});
})();
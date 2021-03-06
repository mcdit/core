/*
==================================================================================================
  Core - JavaScript Foundation
  Copyright 2012-2013 Sebastian Werner
==================================================================================================
*/

"use strict";

/**
 * Event class which is fired whenever a model is added to a collection.
 */
core.Class("core.mvc.event.Add", 
{
  pooling: true,
  include : [core.event.MDispatchable],
  implement : [core.event.IEvent],

  /**
   * @item {Object} Item which was added
   */
  construct: function(item) {
    this.__item = item;
  },

  members: 
  {
    // Interface implementation
    getType : function() {
      return "add";
    },
    
    /**
     * Sets the added @item {Object}.
     */
    setItem : function(item) {
      this.__item = item;
    },

    /**
     * {Object} Returns the added item.
     */
    getItem : function() {
      return this.__item;
    }
  }
});

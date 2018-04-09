'use strict';
/* global cuid */

const store = (function(){ 
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];	
  const hideCheckedItems = false;	
  const searchTerm = ''; 
  const findById = function(id){
    let found = store.items.find(item => {
      if(item.id === id){
        return item;
      }
    });
    console.log(found);
    return found;    
  };
  const addItem = function(name){
    try{
      console.log('got here');
      Item.validateName(name);      
      this.items.push(Item.create(name));
    }catch(error){
      throw new Error(error.message);
    }
  };
  const findAndToggleChecked = function(id){
    this.items.findById(id).checked = !this.items.findById(id).checked;
  };
  const findAndUpdateName = function(id,newName){
    try{
      Item.validateName(newName);
      this.items.findById(id).name = newName;
    }catch(error){
      console.log(`Cannot update name: ${error.message}`);
    }
  };
  const findAndDelete = function(id){
    function findFirstIndex(element){
      return element.id === id;
    }
    let index = this.items.findIndex(findFirstIndex);    
    this.items.splice(index,1);
    //return this.items;
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
  };
}());

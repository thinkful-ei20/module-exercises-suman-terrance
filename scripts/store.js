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
    console.log(id);
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
      Item.validateName(name);      
      this.items.push(Item.create(name));
    }catch(error){
      throw new Error(error.message);
    }
  };
  const findAndToggleChecked = function(id){
    findById(id).checked = !findById(id).checked;
  };
  const findAndUpdateName = function(id,newName){
    try{
      Item.validateName(newName);      
      findById(id).name = newName;
    }catch(error){
      console.log(`Cannot update name: ${error.message}`);
    }
  };
  const findAndDelete = function(id){
    function findFirstIndex(element){
      console.log(element.id);
      return element.id === id;
    }
    let index = this.items.findIndex(findFirstIndex);
    console.log(index);   
    this.items.splice(index,1);
    //return this.items;
  };

  const toggleCheckedFilter = function(){
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(val){
    this.searchTerm = val;    
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
    toggleCheckedFilter,
    setSearchTerm,
  };
}());

class ShoppingListItem extends React.Component{
  /* Uncomment this constructor if you feel like you need it*/
  constructor(props){
      super(props)

   }
  render(){
    return(
	<li>{this.props.name} {this.props.isBought ? ' (Bought)' : ''} &nbsp;
      <button
          onClick={this.props.onClick}
        > Bought?
      </button>
      </li>
    );
  }

}

class ShoppingList extends React.Component {
  /* Uncomment this constructor if you feel like you need it*/
  constructor(props){
      super(props)
      this.state = {items: [{name: 'Bananas', isBought: false}, {name: 'Oat Milk', isBought: false}, {name: 'Coffee', isBought: false}], itemsBoughtCounter: 0};
  }

  //this is needed ONLY for the last challenge
  onKeyUp(event){
    if (event.key === 'Enter'){
      let myStr = 'Enter Key Pressed and this was entered: ' + event.target.value
      console.log(myStr);

    }
  }

    checkOff(index) {
	var state = this.state;
	if(state.items[index].isBought){return}
	state.items[index].isBought = true;
	state.itemsBoughtCounter++;
	this.setState(state);
    }

  render() {

    return (
      <div className='shopping-list'>
        <h1>Shopping List for {this.props.name}</h1>
          <ul>
	      {this.state.items.map((item, index) => {
		  return (
		      <ShoppingListItem name={item.name} onClick={() => this.checkOff(index)} isBought={item.isBought}/>

		  );
	      })}
          <li>New Item</li>
        </ul>
        {/* Ignore this items bought counter until later challenges*/}
        <div>{this.state.itemsBoughtCounter} out of {this.state.items.length} items bought.</div>
        {/*a FORM used for enerting things. ONLY NEEDED for later challenges.*/}
        <form>
           <label htmlFor='add an item'>add an item: &nbsp;</label>
           <input
             type='text'
             name='add an item'
             defaultValue=''
             onKeyPress={this.onKeyUp}
           />
        </form>
      </div>
    );
  }
}


/*TO DOs / Challenges:
1. Change Shopping list to not have 'David' hard coded. Change it to a variable and add your names!
2. Change ShoppingListItem to receive a name taken from the myInitialList (e.g. myInitialList[0])
3. Change the onClick handler in ShoppingListItem to update the name to say 'itemName bought!' (e.g. 'Bananas' --> 'Bananas Bought!'')
  Hint: Do you need to create an initial state for each ShoppingListItem? How can you set that state when you need to change it?
4. Change the onClick handler again to handle clicks at the level of ShoppingList.
   Change where myInitialList and itemsBoughtCounter are initialized. Update itemsBoughtCounter so that it increases by 1 with a click from
   any button
5. Use the add item form and event handler (checks if Enter is pressed) to make a single new ShoppingListItem (after the initial 3).
    Don't worry about making it work for every case/add a lot of new items, just do it for one case/the simplest case
6. Build on the previous challenge to update an internal shopping list / add New ShoppingListItems in a programmatic way
    (i.e. so that everytime you write on the form and hit enter, a new ShoppingListItem is created)
    Hint: You'll have to reformulate how you are rendering ShoppingList and change its internal state
    Remember, you can use functions to return a list of items where one element is added at a time
*/

// ========================================

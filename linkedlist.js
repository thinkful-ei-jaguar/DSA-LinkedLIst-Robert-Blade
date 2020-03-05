class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}



class SLL  {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) { 
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  remove(item){ 
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(item,insertion){
    if(this.head===null){
      this.insertFirst(item);
    }
    let currNode = this.head;
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }///123567  //4 prevnode// 3 currno//5
    previousNode.next=new _Node(insertion,currNode);
  }
  insertAfter(item,insertion){
    if(this.head===null){
      this.insertFirst(item);
    }
    let currNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }///5689 currno//7 
    let oldcurrNodeNext =currNode.next;
    currNode.next=new _Node(insertion,oldcurrNodeNext);
  }
  insertAt(item,position){
    let currNode = this.head;
    let previousNode = this.head;
    let counter2 = 0;
    while((currNode !== null) && position-1 !==counter2){
      previousNode = currNode;
      currNode = currNode.next;
      counter2++;
    }
    if(currNode){
      previousNode.next=new _Node(item,currNode);
    }else if(position>counter2||counter2<=0){
      console.log("position too big for current array size of "+ counter2+ " adding it to the last index");
      insertLast(item);
    }
  }
}
/* function isEmpty(ll){

}*/
function size(ll){
  let ptr= ll.head;
  let counter=0;
  while(ptr !== null){
    ptr=ptr.next;
    counter++;
  }
  return counter;
} 

function display(ll) {
  //ll.head
  let currNode = ll.head;
    
  while(currNode !== null) {
    console.log("Node value:", currNode.value);
    currNode = currNode.next;
  }
}

function empty(ll) {
  return !ll.head;
}

function findPrevious (ll, item) {

  let currNode = ll.head;
  let previousNode = ll.head;

  while((currNode !== null) && (currNode.value !== item)){
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log('Item not found');
    return;
  }///123567  //4 prevnode// 3 currno//5
  return previousNode.value;
}

function findLast (ll) {

  let tempNode = ll.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  return tempNode.value;
}


function main(){


  let list= new SLL();
  console.log("new list");
  list.insertFirst("Apollo");//end of list
  list.insertFirst("Boomer");
  list.insertFirst("Helo");
  list.insertFirst("Husker");
  list.insertFirst("Starbuck");
  list.insertFirst("Tauhida");//beggining list
  console.log(list);
  list.remove("squirrel");
  list.insertBefore("Boomer","Athena");
  const a = list.find("Athena");
  console.log(a);
  list.insertAfter("Helo","Artemis");
  const b = list.find("Helo");
  console.log(b);
  list.insertAt("Loki",4);
  const c = list.find("Husker");
  console.log(c);
  list.remove("Tauhida");
  console.log(list);
  display(list);
  console.log(size(list));
  console.log(empty(list));
  console.log(findPrevious(list, "Helo"));
  console.log(findLast(list))


}
main();



//4.) Shoves any duplicate nodes off of the end of the list.

/* starts at the head
    copies that head node into newNode
    checks to see if there is a node after the head node
        if there is, it checks to see if that next node's value is equal to the head node
            if it is, then it sets the next node to be equal to the one after it
        Otherwise, it sets the value of newNode to be the next node's value
    Then it moves to the next node and repeats
 */
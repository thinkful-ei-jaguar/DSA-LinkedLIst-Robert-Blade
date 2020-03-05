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
      this.insertLast(item);
    }
  }
}
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
  return previousNode;
}

function findLast (ll) {

  let tempNode = ll.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  return tempNode;
} 

/**
 * 
 * Reverse a List:
 *  Input: a linked list (A, B, C, D, E)
 *  Output: the same list with the links going in the opposite direction (E, D, C, B, A)
 * 
 *  Algorithm:
 *      0.)  Initiate counter at 1
 *      1.)  Starting at head, keep track of current, parent, and grandparent nodes
 *      2.)  Navigate to next node.  Set parentNode.next = grandparentNode.  counter++
 *      3.)  Once counter = size(list), List.head = parentNode
 * 
 *  Note: 
 *      I think you need the grandparent or you will lose the ability to traverse the list
 *      when you update each link, but I could be wrong.  You might just need the parent 
 *      and the current.
 */
function reverselist(ll){
    let counter = 1;
    let sizeOfList = size(ll);
    let currentNode = ll.head;
    let parentNode = null;
    let grandparentNode = null;

    while (counter <= sizeOfList) {
        grandparentNode = parentNode
        parentNode = currentNode
        currentNode = currentNode.next
        parentNode.next = grandparentNode
        counter++
    }

    ll.head = parentNode
    return ll;
}
function thirdfromend (ll) {
    let tempNode = ll.head;
    let previousNode = ll.head;
    let secondpreviousNode = ll.head;

    while (tempNode.next !== null) {
        secondpreviousNode=previousNode
        previousNode = tempNode;
        tempNode = tempNode.next;
    }
    return secondpreviousNode;
  }   
  
function middleoflist (ll) {
    const Size = size(ll)
    let middle =Math.floor(Size/2)
    let tempNode = ll.head;
    let i =0;
    if(Size%2==0){
        while (i<middle) {
            tempNode = tempNode.next;
            i++;
        }
    }
    else{
        while (i<middle+1) {
            tempNode = tempNode.next;
            i++;
        }
    }
    return tempNode;

}

/**
 * 
 * Cycle in a list:
 *  Input/Output:
 *      Input is a linked list
 *      Output is true/false based on if list is circular
 * 
 *  Algorithm:
 *      We know that no node.next will equal null if circular
 *      We know that node.next will eventually equal null if linear
 *      We know that CurrentNode.next will equal a  previous Node at some point if circular
 * 
 *      1.) Start cycling through linked list. 
 *      2.) If CurrNode.next = PrevNode
 */

 //This is actually incomplete.  It only checks the node before it and not the whole list
function cycleListBasic(ll){//1-2-3-1-23-123 
    let circular;
    let currentNode = ll.head;
    let prevNode = ll.head;

    while (currentNode.next !== null && currentNode.next !== prevNode) {
        prevNode = currentNode;
        currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
        return circular = false;
    } else {
        circular = true;
    }    
    return circular;
}

function cycleList(ll){//
    console.log('test test')
    let currentNode = ll.head;
    let nodeArray = [];
    if (currentNode.next === null) {
       return false;
    } else {
        
        while(currentNode.next !== null) {
            for (let i = 0; i < nodeArray.length; i++) {
                if (nodeArray && (nodeArray[i] == currentNode)) {
                    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                    return true
                }    
            }
        nodeArray.push(currentNode)
        currentNode = currentNode.next
        if(currentNode.next === null) {
            return false
        }
        }
    }    
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
  list.insertAt("Loki",2);
  const c = list.find("Husker");
  console.log(c);
  list.remove("Tauhida");
  console.log(list);
  display(list);
  console.log(size(list));
  console.log(empty(list));
  //console.log(findPrevious(list, "Helo").value);
  console.log(findLast(list).value)
  console.log(thirdfromend(list).value);
  console.log(middleoflist(list).value);
  console.log('Is it a circular list?', cycleList(list))
  
  console.log("this is prevlist")
  display(list);
  reverselist(list);
    console.log("this is reverselist")
  display(list);
    


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
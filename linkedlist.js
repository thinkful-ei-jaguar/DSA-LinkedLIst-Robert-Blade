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
            console.log("position too big for current array size of "+ counter2+ " adding it to the last index")
            insertLast(item);
        }
    }
}
/* function isEmpty(ll){

}*/
function size(ll){
  const ptr= ll.head;
  let counter=0;
    while(ptr!==null){
        ptr=ptr.next;
        counter++
    }
return counter;
} 


function main(){


    let list= new SLL();
    console.log("new list")
    list.insertFirst("Apollo");//end of list
    list.insertFirst("Boomer");
    list.insertFirst("Helo");
    list.insertFirst("Husker");
    list.insertFirst("Starbuck");
    list.insertFirst("Tauhida");//beggining list
    console.log(list);
    list.remove("squirrel")
    list.insertBefore("Boomer","Athena")
    const a = list.find("Athena");
    console.log(a);
    list.insertAfter("Helo","Artemis")
    const b = list.find("Helo");
    console.log(b);
    list.insertAt("Loki",4);
    const c = list.find("Husker");
    console.log(c);
    list.remove("Tauhida")
    console.log(list);


}
main();
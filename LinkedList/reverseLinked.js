class Node {
    constructor(data){
        this.data=data;
        this.next=null;

    }
}
let head =new Node(1);
head.next=new Node(2);
head.next.next=new Node(3);

let prev=null;
let curr=head;
while(curr){
    let next=curr.next;
    curr.next=prev;
    prev=curr;
    curr=next;

}
head=prev;

let temp=head;
while(temp){
    console.log(temp.data);
    temp=temp.next;
}



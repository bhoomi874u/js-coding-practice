class ListNode{
    constructor (val){
        this.val=val;
        this.next=null;

    }
}
 let head=new ListNode(1);
head.next=new ListNode(2);
head.next.next=new ListNode(3);
head.next.next.next=new ListNode(4);
head.next.next.next.next=new ListNode(5);

function evenOddLinkList(head){
let odd=head ;
let even=head.next;
evenHead=even;
while(even!=null && even.next!=null){
    odd.next=even.next;
    odd=odd.next;
     
    even.next=odd.next;
    even=even.next;

}
odd.next=evenHead;
return head;


}
head=evenOddLinkList(head)
console.log(head)
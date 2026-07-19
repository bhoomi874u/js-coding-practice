function linkListCycle (head){
let slow=head;
let fast=head
while(fast!=null && fast.next!=null){
    slow=slow.next;
    fast=fast.next.next;
}
if(slow==fast){
    return true;
}
else{
    return false;
}
}
linkListCycle
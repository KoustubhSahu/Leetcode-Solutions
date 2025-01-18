/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let l = lists.length;
    let n = l;
    let result = null;
    let traverse = new ListNode(-1, null);

    lists.forEach((ll) => {
        if(ll == null) n--;
    });

    while (n>0) {
        let m = 0;
        for (let i=0; i<l; i++) {
            if ((lists[i] != null) && (lists[m] != null) && (lists[i].val < lists[m].val)) {
                m = i;

            } else if (lists[m] == null){
                m++;
            }      
        }
        traverse.next = new ListNode(lists[m].val, null);
        traverse = traverse.next;
        if (result == null) result = traverse;
        
        lists[m] = lists[m].next;
        if (lists[m] == null) n--;
    }
    return result;
};


class LRUCache {
    class Node {
        var key: Int
        var val: Int
        var prev: Node? = nil
        var next: Node? = nil

        init(_ key: Int, _ val: Int) {
            self.key = key
            self.val = val
        }
    }

    var head: Node? = nil
    var tail: Node? = nil
    var capacity: Int
    var map = [Int: Node?]()

    init(_ capacity: Int) {
        self.capacity = capacity
    }
    
    func get(_ key: Int) -> Int {
        guard let node = map[key] else {
            return -1
        }
            
        delete(node)
        add(node)
        return node!.val
    }
    
    func put(_ key: Int, _ value: Int) {
        let newNode: Node? = Node(key, value)
        if let node = map[key] {
            delete(node)
        } else if map.count == capacity {
            map.removeValue(forKey: head!.key)
            delete(head)
        }
        add(newNode)
        map[key] = newNode
    }

    func add(_ node: Node?) {
        if head == nil && tail == nil {
            head = node
            tail = node
        } else {
            node?.prev = tail
            tail?.next = node
            tail = tail?.next
        }
    }

    func delete(_ node: Node?) {
        if node?.prev == nil && node?.next == nil {
            head = nil
            tail = nil
        } else if node?.prev == nil {
            head = head?.next
            head?.prev = nil
        } else if node?.next == nil {
            tail = tail?.prev
            tail?.next = nil
        } else {
            node?.prev?.next = node?.next
            node?.next?.prev = node?.prev
            node?.next = nil
            node?.prev = nil
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * let obj = LRUCache(capacity)
 * let ret_1: Int = obj.get(key)
 * obj.put(key, value)
 */
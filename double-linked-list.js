class DoubleLinkedList {
	constructor() {
		this.head = null;
	}
	insertFirst(item) {
		this.head = new _Node(item, this.head, null);
		if(this.head.next !== null) {
			this.head.next.previous = this.head;
		}
	}


	insertBefore(item, key) {
		if(this.head === null) {
			this.insertFirst(item)
		}

		let prev = this.head;
		let current = this.head;

		while(current !== null && current.value !== key) {
			prev = current;
			current = current.next;
		}

		if (current === null) {
			return null;
		}

		prev.next = new _Node(item, current, prev);
	}


	insertAfter(item, key) {
		let current = this.find(key);
		let temp = current.next;
		current.next = new _Node(item, temp, current);
	}


	insertAt(item, index) {
		if(index === 0) {
			this.insertFirst(item);
		}

		if(this.head === null) {
			return null;
		}

		let current = this.head;
		let prev = this.head;
		let count = 0;

		while(current !== null && count !== index) {
			prev = current;
			current = current.next;
			count++;
		}

		if (current === null) {
			throw new Error(`There are only ${count} elements in the list`);
		}

		prev.next = new _Node(item, current, prev);
	}


	insertLast(item) {
		if(this.head === null) {
			this.insertFirst(item);
		} else {
			let iterNode = this.head;
			while(iterNode.next !== null) {
				iterNode = iterNode.next;
			}
			iterNode.next = new _Node(item, null, iterNode);
		}
	}


	find(item) {
		if(this.head === null) {
			return null;
		}
		let iter = this.head;
		while(iter.value !== item) {
			if(iter.next === null) {
				return null;
			}
			iter = iter.next;
		}
		return iter;
	}


	remove(item) {
		if(this.head === null) {
			return null;
		}
		let prev = this.head;
		let iter = this.head;

		while(iter !== null && iter.value !== item) {
			prev = iter;
			iter = iter.next;
		}
		if(iter === null) {
			return null;
		}
		prev.next = iter.next;
		prev.next.previous = prev;
	}
}

class _Node {
	constructor(value, next, previous) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}

function mainDLL() {
	let DLL = new DoubleLinkedList();
	DLL.insertFirst("Sagittaron");
	DLL.insertFirst("Picon");
	DLL.insertFirst("Gemenon");
	DLL.insertFirst("Caprica");
	DLL.insertFirst("Aquaria");

	DLL.insertLast("Tauron");
	DLL.remove("Picon");

	console.log(DLL);
	console.log(reverseDll(DLL));
}

function reverseDll(list) {
	let iter = list.head;
	let reverse = new _Node(iter.value, null, null);
	while (iter.next !== null) {
		iter = iter.next;
		reverse.previous = new _Node(iter.value, reverse, null);
	}
	return reverse;
}

mainDLL();
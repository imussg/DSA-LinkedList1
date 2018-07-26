class LinkedList {

	constructor() {
		this.head = null;
	}

	insertFirst(item) {
		this.head = new _Node(item, this.head);
	}

	insertLast(item) {

		if(this.head === null) {
			this.insertFirst(item);
		} else {
			let iterNode = this.head;
			while(iterNode.next !== null) {
				iterNode = iterNode.next;
			}
			iterNode.next = new _Node(item, null);
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

		while(iter !== null & iter.value !== item) {
			prev = iter;
			iter = iter.next;
		}
		if(iter === null) {
			return null;
		}
		prev.next = iter.next;
	}
}

class _Node {

	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}
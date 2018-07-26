class LinkedList {
	constructor() {
		this.head = null;
	}


	insertFirst(item) {
		this.head = new _Node(item, this.head);
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

		prev.next = new _Node(item, current);
	}


	insertAfter(item, key) {
		let current = this.find(key);
		let temp = current.next;
		current.next = new _Node(item, temp);
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

		prev.next = new _Node(item, current);
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

		while(iter !== null && iter.value !== item) {
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

////////////// MAIN //////////////////

function main() {
	let SLL = new LinkedList();

	console.log(isEmpty(SLL)); //true

	SLL.insertLast('Apollo');
	SLL.insertLast('Boomer');
	SLL.insertLast('Helo');
	SLL.insertLast('Husker');
	SLL.insertLast('Starbuck');

	SLL.insertLast('Tauhida');

	SLL.remove('squirrel');

	SLL.insertBefore('Athena', 'Boomer');
	SLL.insertAfter('Hotdog', 'Helo');
	SLL.insertAt('Kat', 3);

	SLL.remove('Tauhida');

	console.log(display(SLL));
	console.log(findSize(SLL));
	console.log(isEmpty(SLL)); //false
	console.log(findPrevious(SLL, 'Helo'));
	console.log(findLast(SLL));
	console.log(reverseList(SLL));
	console.log(thirdFromEnd(SLL));
	console.log(middleList(SLL));

	console.log(cycleList(SLL));
}

console.log(main());


////////////// DISPLAY //////////////////

function display(list) {
	let current = list.head,
			displayList = '';

	while(current !== null) {
		displayList += `${current.value} -> `
		current = current.next;
	}

	return displayList;
}


////////////// SIZE //////////////////

function findSize(list) {
	let current = list.head,
			size = 0;

	while (current !== null) {
		size++;
		current = current.next;
	}

	return size;
}


////////////// IS EMPTY? //////////////////

function isEmpty(list) {
	if (list.head === null) {
		return true;
	}
	return false;
}


////////////// FIND PREVIOUS //////////////////

function findPrevious(list, item) {
	let current = list.head,
			prev = list.head;

	while (current !== null && current.value !== item) {
		prev = current;
		current = current.next;
	}

	return prev;
}


////////////// FIND LAST //////////////////

function findLast(list) {
	let current = list.head;

	while (current.next !== null) {
		current = current.next;
	}

	return current;
}

/* Algorithm traverses through the LL and removes and duplicate values */
function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// 1 -> 2 -> 3
// (value: 1, null)
// value: 2, next: reverse

function reverseList(list) {
	let iter = list.head;
	let reverse = new _Node(iter.value, null);
	let str = reverse.value;
	iter = iter.next;
	while(iter !== null) {
		reverse = new _Node(iter.value, reverse);
		str += " <- " + reverse.value;
		iter = iter.next;
	}
	console.log(str);
	return reverse;
}

function thirdFromEnd(list) {
	
	if(list.head === null || list.head.next === null || list.head.next.next === null) {
		return null;
	}
	iter = list.head;
	while(iter.next.next.next !== null) {
		iter = iter.next;
	}
	return iter;
}

function middleList(list) {
	const size = findSize(list);
	let iter = list.head;
	for(let i=0; i<Math.floor(size/2); i++) {
		iter = iter.next;
	}
	return iter;
}

function cycleList(list) {
	if(list.head === null) {
		return null;
	}
	let temp;
	let iter = list.head;
	let count = 0;
	while(iter.next !== null) {
		iter = iter.next;
		temp = list.head;
		for(let i=0; i<count; i++) {
			if(iter.next === temp) {
				return true;
			}
			temp = temp.next;
		}
	}
	return false;
}

"use strict";

/**
 * Creates a new priority queue, ordered with respect to the given compare
 * callback.
 *
 * @class
 * @param {PriorityQueue~compare} - The compare callback to be used to order the
 *                                  queue.
 */
function PriorityQueue(compare) {
  this._elements = [];
  this._compare = compare;
}

/**
 * Compares two values with each other.
 *
 * @callback PriorityQueue~compare
 * @param {*} a - The first value to be compared.
 * @param {*} b - The second value to be compared.
 * @return {number} - A negative integer if a is smaller than b, zero if a is
 *                    equal to b, or a positive integer if a is larger than b.
 */

/**
 * The number of elements in the queue.
 *
 * @type {number}
 */
Object.defineProperty(PriorityQueue.prototype, "size", {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._elements.length;
  }
});

/**
 * The smallest element in the queue.
 *
 * @type {*}
 */
Object.defineProperty(PriorityQueue.prototype, "front", {
  configurable: true,
  enumerable: true,
  get: function () {
    return this._elements[0];
  }
});

/**
 * Adds an element to the queue.
 *
 * @param {*} element - The element to be added to the queue.
 */
PriorityQueue.prototype.enqueue = function (element) {
  var index = this._elements.length;
  while (index > 0) {
    var parent = Math.floor((index - 1) / 2);
    if (this._compare(this._elements[parent], element) < 0) {
      break;
    }
    this._elements[index] = this._elements[parent];
    index = parent;
  }
  this._elements[index] = element;
};

/**
 * Removes the smallest element from the queue.
 *
 * @return {*} The element that was removed from the queue.
 */
PriorityQueue.prototype.dequeue = function () {
  if (this._elements.length < 2) {
    return this._elements.pop();
  }
  var front = this._elements[0];
  var element = this._elements.pop();
  var index = 0;
  for (;;) {
    var child = 2 * index + 1;
    if (child >= this._elements.length) {
      break;
    }
    var sibling = child + 1;
    if (sibling < this._elements.length &&
        this._compare(this._elements[sibling], this._elements[child]) < 0) {
      child = sibling;
    }
    if (this._compare(element, this._elements[child]) < 0) {
      break;
    }
    this._elements[index] = this._elements[child];
    index = child;
  }
  this._elements[index] = element;
  return front;
};

/**
 * Removes all elements from the queue.
 */
PriorityQueue.prototype.clear = function () {
  this._elements.length = 0;
};

exports.PriorityQueue = PriorityQueue;

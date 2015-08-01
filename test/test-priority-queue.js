"use strict";

var PriorityQueue = require("../lib/priority-queue").PriorityQueue;
var assert = require("assert");

var COUNT = 100;

function compare(a, b) {
  return a - b;
}

describe("PriorityQueue", function () {
  describe("enqueue", function () {
    it("should increment the size of the queue by 1.", function () {
      var queue = new PriorityQueue(compare);
      for (var index = 0; index < COUNT; ++index) {
        var size = queue.size;
        queue.enqueue(Math.random());
        assert.strictEqual(queue.size, size + 1);
      }
    });
    it("should update the front of the queue.", function () {
      var queue = new PriorityQueue(compare);
      var values = [];
      for (var index = 0; index < COUNT; ++index) {
        var value = Math.random();
        queue.enqueue(value);
        values.push(value);
        values.sort();
        assert.strictEqual(queue.front, values[0]);
      }
    });
  });
  describe("dequeue", function () {
    it("should decrement the size of the queue by 1.", function () {
      var queue = new PriorityQueue(compare);
      for (var index = 0; index < COUNT; ++index) {
        queue.enqueue(Math.random());
      }
      for (var index = 0; index < COUNT; ++index) {
        var size = queue.size;
        queue.dequeue();
        assert.strictEqual(queue.size, size - 1);
      }
    });
    it("should update the front of the queue.", function () {
      var queue = new PriorityQueue(compare);
      var values = [];
      for (var index = 0; index < COUNT; ++index) {
        var value = Math.random();
        queue.enqueue(value);
        values.push(value);
      }
      values.sort();
      for (var index = 0; index < COUNT; ++index) {
        queue.dequeue();
        values.shift();
        assert.strictEqual(queue.front, values[0]);
      }
    });
    it("should have no effect if the queue is empty", function () {
      var queue = new PriorityQueue(compare);
      queue.dequeue();
      assert.strictEqual(queue.size, 0);
      assert.strictEqual(queue.front, undefined);
    });
  });
  describe("clear", function () {
    it("should remove all elements from the queue.", function () {
      var queue = new PriorityQueue(compare);
      for (var index = 0; index < COUNT; ++index) {
        queue.enqueue(Math.random());
      }
      queue.clear();
      assert.strictEqual(queue.size, 0);
      assert.strictEqual(queue.front, undefined);
    });
  });
});

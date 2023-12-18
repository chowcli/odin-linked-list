const Node = (data, nextNode = null) => {
  return {
    value: data,
    next: nextNode
  };
};

module.exports = Node;

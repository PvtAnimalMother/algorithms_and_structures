const shortPath = (graph, start, end) => {
  const costs = {}; // кратчайшие пути
  const processed = []; // проверенные узлы
  let neighbors = {}; // соседние вершины рассматриваемого узла
  Object.keys(graph).forEach((node) => {
    // получаем список ключей - вершины
    if (node !== start) {
      // если вершина не равна стартовой
      let value = graph[start][node];
      // если их точки есть путь, то добавляем значение, иначе добавляем бесконечно большое число
      costs[node] = value || 100000000;
    }
  });
  let node = findNodeLowestCost(costs, processed);
  while (node) {
    const cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
};

function findNodeLowestCost(costs, processed) {
  let lowestCost = 100000000; // минимальное значение
  let lowestNode; // возвращаемое значение ноды с минимальным значением
  Object.keys(costs).forEach((node) => {
    let cost = costs[node]; // получаем стоимость ноды
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

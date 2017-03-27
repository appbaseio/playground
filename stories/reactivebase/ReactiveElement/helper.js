var _ = require("lodash");
export var GetTopTopics = function(data) {
	let store = {};
	let topics = [];
	data.forEach((singleData) => {
		singleData._source.group.group_topics.forEach((topic) => {
			store[topic.topic_name] = store[topic.topic_name] ? store[topic.topic_name] + 1 : 1;
		});
	})
	for(let topic in store) {
		let obj = {
			name: topic,
			value: store[topic]
		};
		topics.push(obj);
	}
	topics = _.sortBy(topics, "value").reverse();
	return topics;
}
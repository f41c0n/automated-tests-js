export default {
	'$schema': 'http://json-schema.org/draft-04/schema#',
	'description': '',
	'type': 'object',
	'properties': {
		'args': {
			'type': 'object',
			'properties': {},
			'required': []
		},
		'headers': {
			'type': 'object',
			'properties': {
				'Accept': {
					'type': 'string',
					'minLength': 1
				},
				'Accept-Encoding': {
					'type': 'string',
					'minLength': 1
				},
				'Accept-Language': {
					'type': 'string',
					'minLength': 1
				},
				'Host': {
					'type': 'string',
					'minLength': 1
				},
				'Referer': {
					'type': 'string',
					'minLength': 1
				},
				'Upgrade-Insecure-Requests': {
					'type': 'string',
					'minLength': 1
				},
				'User-Agent': {
					'type': 'string',
					'minLength': 1
				}
			},
			'required': [
				'Accept',
				'Host'
			]
		},
		'origin': {
			'type': 'string',
			'minLength': 1
		},
		'url': {
			'type': 'string',
			'minLength': 1
		}
	},
	'required': [
		'args',
		'headers',
		'origin',
		'url'
	]
};
export default {
	'$schema': 'http://json-schema.org/draft-04/schema#',
	'type': 'object',
	'properties': {
		'args': {
			'type': 'object',
			'properties': {}
		},
		'data': {
			'type': 'string'
		},
		'files': {
			'type': 'object',
			'properties': {}
		},
		'form': {
			'type': 'object',
			'properties': {}
		},
		'headers': {
			'type': 'object',
			'properties': {
				'Accept-Encoding': {
					'type': 'string'
				},
				'Content-Length': {
					'type': 'string'
				},
				'Content-Type': {
					'type': 'string'
				},
				'Host': {
					'type': 'string'
				},
				'User-Agent': {
					'type': 'string'
				}
			},
			'required': [
				'Content-Length',
				'Content-Type',
				'Host'
			]
		},
		'json': {
			'type': 'object'
		},
		'origin': {
			'type': 'string'
		},
		'url': {
			'type': 'string'
		}
	},
	'required': [
		'args',
		'data',
		'files',
		'form',
		'headers',
		'json',
		'origin',
		'url'
	]
};
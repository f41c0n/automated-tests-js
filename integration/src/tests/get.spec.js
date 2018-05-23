import { get, expect } from 'chakram';
import { environemnt, endpoint, timeout } from '../configs/config';
import schema from '../schemas/get.schema';

const url = environemnt + endpoint.get;

describe('GET Endpoint', () => {
	let apiResponse;

	it('should return 200 on success', () => {
		apiResponse = get(url);

		return expect(apiResponse).to.have.status(200);
	});

	it('should respond with correct JSON data', () => {
		return expect(apiResponse).to.have.json('url', url);
	});

	it('should respond with data matching schema', () => {
		return expect(apiResponse).to.have.schema(schema);
	});

	it('should respond within maximum response time', () => {
		return expect(apiResponse).to.have.responsetime(timeout);
	});
});
import type { Entry, FieldsType } from 'contentful';

type ContentfulType = 'contentful-object' | 'object-array' | 'primitive-array' | 'primitive';

const getType = (field: unknown): ContentfulType => {
	if (typeof field === 'object' && field !== null && 'fields' in field && 'sys' in field)
		return 'contentful-object';
	if (Array.isArray(field)) {
		if (typeof field[0] === 'object' && 'sys' in field[0]) return 'object-array';
		return 'primitive-array';
	}
	if (['string', 'number', 'boolean', 'bigint'].includes(typeof field)) return 'primitive';

	// At this point it means is a Rich Text or JSON
	if (typeof field === 'object') return 'primitive';
	return 'primitive';
};

export const cleanContentfulEntry = <T>(data: Entry): T => {
	const { fields, sys } = data;
	const result: FieldsType = {};

	if (getType(data) === 'contentful-object') {
		result.contentfulId = sys.id;

		if (sys.contentType) result.contentType = sys.contentType.sys.id;
	}

	// TODO: Just for Ninetailed. To delete.
	if (sys.contentType?.sys?.id === 'nt_experience') {
		return data as T;
	}

	Object.keys(fields).forEach((key) => {
		const field = fields[key];
		const fieldType = getType(field);

		if (fieldType === 'contentful-object') result[key] = cleanContentfulEntry(field as Entry);
		else if (fieldType === 'primitive' || fieldType === 'primitive-array') result[key] = field;
		else if (fieldType === 'object-array')
			result[key] = (field as Array<Entry>).map(cleanContentfulEntry);
	});

	return result as T;
};

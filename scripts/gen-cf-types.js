import { CFDefinitionsBuilder, DefaultContentTypeRenderer } from 'cf-content-types-generator';
import contentTypes from './content-types.json' with { type: 'json' };
import { writeFileSync } from 'node:fs';
import { resolve } from 'path';
import { cwd } from 'process';

const builder = new CFDefinitionsBuilder([new DefaultContentTypeRenderer()]);
builder.appendTypes(contentTypes.contentTypes);

writeFileSync(resolve(cwd(), './src/lib/server/cms/contentful/types.d.ts'), builder.toString());

import { type SchemaTypeDefinition } from 'sanity';
import {chef} from './chefs';
import {food} from './foods';
import {category} from './category';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chef, food, category],
}

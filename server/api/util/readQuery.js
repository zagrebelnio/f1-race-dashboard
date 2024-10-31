import fs from 'fs';
import path from 'path';

export default function readQuery(queryPath) {
  return fs.readFileSync(path.resolve(queryPath), 'utf8');
}

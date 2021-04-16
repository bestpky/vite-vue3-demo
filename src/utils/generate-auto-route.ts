import {RouteRecord} from 'vue-router'
interface Params {
  path: string
  requireContext:any
}

const rIndex = /^index\.(vue|jsx?|tsx?)$/;
const rName = /^([^.]*)\.(vue|jsx?|tsx?)$/;

function baseKeys(keys: string[], basePath: string) {
  return keys.filter(item => item.startsWith(basePath))
    .map(item => item.substr(basePath.length));
}

export default function generateAutoRoute({path,requireContext}: Params) {
  const requireContextKeys = Object.keys(requireContext)
  const requireContextEntry = Object.entries(requireContext)
  const keys = baseKeys(requireContextKeys, '../views/')

  const components = {} as NonNullable<RouteRecord['components']>;
  const indexKeys: string[] = [];
  const folderKeys: {[basePath: string]: string[]} = {};
  const otherKeys: string[] = [];
  keys.forEach(key => {
    if (rIndex.test(key)) {
      indexKeys.push(key);
    } else {
    }
  })
}

export { generateAutoRoute }
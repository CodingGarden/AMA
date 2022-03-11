const dependencies = {
  $http: fetch,
};

function getArguments(fn) {
  const stringFn = fn.toString();
  // do this better in the real world...
  const paramStr = stringFn.match(/function.*\((.*)\)/)[1];
  const args = paramStr.split(',').map((a) => a.trim());
  return args.map((arg) => [arg, dependencies[arg]]);
}

const cjs = {
  async setComponent(component) {
    const args = getArguments(component.controller);
    for (let i = 0; i < args.length; i += 1) {
      if (!args[i][1]) {
        throw new Error('Unknown dependency: ', args[i][0]);
      }
    }
    const model = await component.controller(...Object.values(Object.fromEntries(args)));
    const html = component.view(model);
    document.querySelector('#app').innerHTML = html;
  },
  registerDependency(name, value) {
    dependencies[name] = value;
  },
};

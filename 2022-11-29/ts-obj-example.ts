// interface SomeType<Options extends string | number | symbol> {
//   anotherKey: Partial<Record<Options, string>>;
// }

// const thingy1: SomeType<'Create' | 'Edit'> = {
//   anotherKey: {
//     Create: 'hi',
//     Edit: 'hi',
//   }
// };

const options = ['Create', 'Edit'] as const;

interface SomeType<Options extends string | number | symbol> {
  key: readonly string[],
  anotherKey: Partial<Record<Options, string>>;
}

const thingy2: SomeType<typeof options[number]> = {
  key: options,
  anotherKey: {
    Create: 'hi',
    Edit: 'hi'
  }
};
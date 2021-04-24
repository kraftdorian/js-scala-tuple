type Tuple = {
  [p: string]: any;
};
type Tuple1<Atom> = Tuple & { _1: Atom };
type Tuple2<Atom1, Atom2> = Tuple1<Atom1> & { _2: Atom2 };
type Tuple3<Atom1, Atom2, Atom3> = Tuple2<Atom1, Atom2> & { _3: Atom3 };

function tuple<Atom>(atom: Atom): Tuple1<Atom>;
function tuple<Atom1, Atom2>(atom1: Atom1, atom2: Atom2): Tuple2<Atom1, Atom2>;
function tuple<Atom1, Atom2, Atom3>(
  atom1: Atom1,
  atom2: Atom2,
  atom3: Atom3
): Tuple3<Atom1, Atom2, Atom3>;
function tuple<Atom1, Atom2, Atom3>(
  atom1: Atom1,
  atom2: Atom2,
  atom3: Atom3,
  ...atoms: any[]
): Tuple3<Atom1, Atom2, Atom3>;

/**
 * Creates immutable Scala-style tuple wrapped in JavaScript object.
 * @param atoms Tuple elements
 */
function tuple(...atoms: any[]): Tuple {
  return Object.freeze(
    atoms.reduce(
      (partial, atom, index) => ({
        ...partial,
        ['_' + ++index]: atom,
      }),
      {}
    )
  );
}

export default tuple;
export { Tuple, Tuple1, Tuple2, Tuple3 };

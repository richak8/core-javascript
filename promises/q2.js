const wait = time => new Promise(
    res => setTimeout(() => res(), time)
  );
      wait(200)
        .then(() => new Promise(res => res('foo'))) // return foo
        .then(a => a) // return foo
        .then(b => console.log(b)) // console.log foo
        .then(() => null) // return null
        .then(c => console.log(c)) // console.log null
        .then(() => {
            throw new Error('foo');
        })
        .then(
          d => console.log(`d: ${ d }`),
          e => console.log(e) // Error: foo
        )
        .then(f => console.log(`f: ${ f }`)) // f: undefined
        .catch(e => console.log(e)) 
        .then(() => {
            throw new Error('bar');
        })
        .then(g => console.log(`g: ${ g }`))
        .catch(h => console.log(h)) //  console.log bar
  
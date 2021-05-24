const faunadb = require('faunadb');
const q = faunadb.query;

(async () => {
  const client = new faunadb.Client({
    secret: 'fnAEKAU8RMACBcTiy4myzse2_07nN__45Sfye8Kg',
  });

  try {
    // const result = await client.query(q.CreateDatabase({ name: 'gatsbyapp' }));
    // console.log('Result =', result);
    const result = await client.query(
      q.CreateKey({
        database: q.Database('mytestdatabase'),
        role: 'server',
      }),
    );
    console.log('Result =', result);
  } catch (error) {
    console.log('error = ', result);
    // if (
    //   error.requestResult.statusCode === 400 &&
    //   error.message === 'instance already exists'
    // ) {
    //   console.log('Database with this name already exists');
    // } else {
    //   console.log('Unknow Error: ');
    //   console.log(error);
    // }
  }
})();

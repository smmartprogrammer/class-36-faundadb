const faunadb = require('faunadb');
const q = faunadb.query;


(async()=>{
    const client = faunadb.Client({secret:"fnAEKAU8RMACBcTiy4myzse2_07nN__45Sfye8Kg"})

    try {
        const result = client.query(
            q.CreateDatabase("gatsbyapp")

        )
        console.log("Result =", result)
    }
    catch(error) {
        if (error.requestResult.statusCode === 400 && error.message === 'instance already exists') {
            console.log('Database with this name already exists');
          }
          else {
            console.log('Unknow Error: ');
            console.log(error);
          }

    
    })
})